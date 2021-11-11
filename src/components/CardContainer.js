import React from "react";
import { Container, Grid } from "@mui/material";
import AboutCard from "./AboutCard";
import cardData from "./CardData";

function CardContainer(props) {
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={7} alignItems="flex-end">
        {cardData.map((card) => (
          <Grid item key={card.title} xs={12} md={4}>
            <AboutCard toggleModal={props.toggleModal} card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
