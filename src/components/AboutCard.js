import React from "react";
import {
  Card,
  CardHeader,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function AboutCard(props) {
  return (
    <CardActionArea>
      <CardHeader
        title={props.card.title}
        titleTypographyProps={{ align: "center" }}
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[700],
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
            <Typography variant="h6" color="text.secondary" key={line}>
              {line}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </CardActionArea>
  );
}

export default AboutCard;
