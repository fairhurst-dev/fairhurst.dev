import { React, useState, useEffect } from "react";
import TechIcon from "./TechIcon";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function TechnologyBar() {
  const [current, setCurrent] = useState(0);

  const techData = [
    { name: "React" },
    {
      name: "Material UI",
    },
    { name: "AWS Amplify" },
    { name: "GitHub" },
  ];

  const dataLength = techData.length;

  useEffect(() => {
    setTimeout(() => {
      if (current === dataLength - 1) setCurrent(0);
      else setCurrent((prev) => prev + 1);
    }, 2000);
  }, [current, dataLength]);

  return (
    <Box>
      <Typography sx={{ p: 1 }} color="white" variant="h4" textAlign="center">
        {techData[current].name}{" "}
      </Typography>

      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        {techData.map((data, index) => {
          return (
            <TechIcon
              key={"icon " + index}
              active={index === current ? true : false}
              name={data.name}
              number={index}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default TechnologyBar;
