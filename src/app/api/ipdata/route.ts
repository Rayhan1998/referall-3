import { NextResponse } from "next/server";
import Ipdata from "ipdata";

const apiKey = process.env.IPDATA_API_KEY;

if (!apiKey) {
  throw new Error("IPDATA_API_KEY is not defined in environment variables.");
}
const ipdata = new Ipdata(apiKey);

export async function GET(request: any) {
  try {
    // Extract the client's IP address from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : request.headers.get("x-real-ip") || request.ip;

    if (!clientIp) {
      return NextResponse.json(
        { error: "Unable to determine client IP address" },
        { status: 400 }
      );
    }

    // Fetch visitor data using ipdata
    const visitorData = await ipdata.lookup(clientIp);

    // Return the fetched data as a JSON response
    return NextResponse.json(visitorData);
  } catch (error) {
    console.error("Error fetching visitor data:", error);
    return NextResponse.json(
      { error: "Unable to fetch IP data" },
      { status: 500 }
    );
  }
}
