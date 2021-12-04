import { React, useState } from "react";
import { Box, minHeight } from "@mui/system";
import { DiReact } from "react-icons/di";
import { SiMaterialui, SiServerless, SiGithub } from "react-icons/si";
import { IconButton } from "@mui/material";
import "../TechIcon.css";
import { Typography } from "@mui/material";

function TechnologyBar() {
  const [iconText, setIconText] = useState("");

  return (
    <Box>
      <Typography
        sx={{ minHeight: "1.5em", p: 0.5 }}
        textAlign="center"
        variant="h4"
        color="white"
      >
        {iconText}
      </Typography>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="space-around"
      >
        <IconButton
          onMouseEnter={() => setIconText("React")}
          onMouseLeave={() => setIconText("")}
        >
          {" "}
          <DiReact className="techIcon" size="64" id="react" />
        </IconButton>
        <IconButton
          onMouseEnter={() => setIconText("Material UI")}
          onMouseLeave={() => setIconText("")}
        >
          <SiMaterialui className="techIcon" size="64" />
        </IconButton>
        <IconButton
          onMouseEnter={() => setIconText("serverless")}
          onMouseLeave={() => setIconText("")}
        >
          <SiServerless className="techIcon" size="64" />
        </IconButton>
        <IconButton
          onMouseEnter={() => setIconText("GitHub")}
          onMouseLeave={() => setIconText("")}
        >
          <SiGithub className="techIcon" size="64" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TechnologyBar;
