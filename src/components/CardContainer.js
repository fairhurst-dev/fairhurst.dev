import React from "react";
import { Container, Grid } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import cardData from "../lib/CardData";
import { Grow } from "@mui/material";

function CardContainer(props) {
  const frostedPaper = {
    boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .5)",
    borderRadius: "5px",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
    background: "transparent",
    padding: "3em",
    ":before": {
      content: '""',
      position: "absolute",
      background: "inherit",
      zIndex: "-1",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      boxShadow: "inset 0 0 2000px rgba(169, 166, 242, 0.5)",
      filter: "blur(10px)",
      margin: "-20px",
    },
  };

  return (
    <Container sx={frostedPaper} maxWidth="lg" component="main">
      <Grid container spacing={7} alignItems="flex-end">
        {cardData.map((card, i) => (
          <Grow
            key={i}
            in
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 1500 }}
          >
            <Grid item key={card.title} xs={12} md={4}>
              <PortfolioCard toggleModal={props.toggleModal} card={card} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Container>
  );
}

export default CardContainer;
