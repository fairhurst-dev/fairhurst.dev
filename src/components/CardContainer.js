import React from "react";
import { Container, Grid } from "@mui/material";
import AboutCard from "./AboutCard";
import { GitHub } from "@mui/icons-material";
import { SaveAlt } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function CardContainer() {
  const cards = [
    {
      title: "Github",
      description: ["Check out the fairhurst.dev repo"],
      icon: <GitHub sx={{ fontSize: 200 }} />,
    },
    {
      title: "Resume",
      description: ["Click to download"],
      icon: <SaveAlt sx={{ fontSize: 200 }} />,
    },
    {
      title: "Linkedin",
      description: ["Connect with me on Linkedin"],
      icon: <LinkedIn sx={{ fontSize: 200 }} />,
    },
  ];
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={7} alignItems="flex-end">
        {cards.map((card) => (
          <Grid item key={card.title} xs={12} md={4}>
            <AboutCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
