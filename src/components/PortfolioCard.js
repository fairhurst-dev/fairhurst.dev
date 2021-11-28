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
    if (title === "Resume") props.toggleModal();
    else window.open(link, "_blank");
  };

  return (
    <Paper sx={{ color: "gray" }} elevation={10}>
      <CardActionArea
        onClick={() => handleOnClick(props.card.title, props.card.link)}
      >
        <CardHeader
          title={props.card.title}
          titleTypographyProps={{ align: "center" }}
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
              <Typography variant="h6" color="text.secondary" key={line}>
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
