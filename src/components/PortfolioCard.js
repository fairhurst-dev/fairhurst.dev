import React from "react";
import {
  CardHeader,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Paper,
} from "@mui/material";

function PortfolioCard(props) {
  const handleOnClick = (title, link) => {
    switch (title) {
      case "Resume":
        props.toggleModal();
        break;
      case "Magic Mirror":
        window.open(link, "_self");
        break;
      default:
        window.open(link, "_blank");
    }
  };

  return (
    <Paper sx={{ height: "23em", color: "gray" }} elevation={10}>
      <CardActionArea
        onClick={() => handleOnClick(props.card.title, props.card.link)}
      >
        <CardHeader
          title={props.card.title}
          titleTypographyProps={{
            align: "center",
            fontWeight: "600",
            color: "white",
          }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            {props.card.icon}
            {props.card.description.map((line) => (
              <Typography
                textAlign="center"
                variant="h6"
                fontFamily="varta"
                color="text.secondary"
                key={line}
              >
                {line}
              </Typography>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Paper>
  );
}

export default PortfolioCard;
