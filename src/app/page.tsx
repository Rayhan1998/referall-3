"use client";

import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface IpData {
  ip: string;
  city: string;
  region: string;
  country_name: string;
}

const Home: NextPage = () => {
  const [ipData, setIpData] = useState<IpData | null>(null);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        const response = await fetch("/api/ipdata");
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    fetchIpData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 0", textAlign: "center" }}>
      <Head>
        <title>MMA Mastery - Your Guide to Mixed Martial Arts</title>
        <meta
          name="description"
          content="Discover the world of Mixed Martial Arts, from techniques and training tips to upcoming events."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#3f51b5" }}
        >
          Welcome to MMA Mastery!
        </Typography>
        <Typography variant="h5" component="p" sx={{ color: "#757575" }}>
          Your Ultimate Guide to the World of Mixed Martial Arts
        </Typography>
      </Box>

      {ipData && (
        <Card sx={{ mb: 4, padding: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom>
              Your IP Information
            </Typography>
            <Typography variant="body1" component="p">
              IP Address: {ipData.ip}
            </Typography>
            <Typography variant="body1" component="p">
              Location: {ipData.city}, {ipData.region}, {ipData.country_name}
            </Typography>
          </CardContent>
        </Card>
      )}

      <Card sx={{ mb: 4, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            About Mixed Martial Arts
          </Typography>
          <Typography variant="body1" component="p">
            Mixed Martial Arts (MMA) is a full-contact combat sport that allows
            a wide variety of fighting techniques, from a mix of traditional and
            non-traditional martial arts disciplines. It includes striking and
            grappling, both standing and on the ground, making it one of the
            most diverse and challenging combat sports in the world.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Training Tips & Techniques
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Whether you're just starting or looking to improve your skills,
            training is the key to success in MMA. Here are some tips to get you
            going:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Striking: Practice basic combinations like jabs, crosses, and hooks. Focus on accuracy and speed." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Grappling: Drilling takedowns and submissions are crucial. Brazilian Jiu-Jitsu (BJJ) plays an important role in grappling success." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Conditioning: MMA requires a mix of strength, stamina, and agility. High-intensity interval training (HIIT) is a great way to build endurance." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Upcoming MMA Events
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Stay tuned for the latest events happening around the world:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="UFC 300: Featuring top fighters competing for the championship titles." />
            </ListItem>
            <ListItem>
              <ListItemText primary="BJJ World Championship: A great event showcasing some of the best grapplers in the world." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Local MMA Fights: Support local fighters by attending regional MMA events in your area." />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, padding: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Interested in learning more about MMA or getting involved? Join our
            community to connect with like-minded individuals, get training
            tips, and stay updated on all things MMA.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Join Now
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
