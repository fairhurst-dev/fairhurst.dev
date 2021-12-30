import React from "react";
import { DiReact } from "react-icons/di";
import {
  SiMaterialui,
  SiServerless,
  SiGithub,
  SiAmazonaws,
} from "react-icons/si";
import { Box } from "@mui/system";

function TechIcon(props) {
  const active = "rgb(232, 51, 244)";

  const getIcon = () => {
    switch (props.name) {
      case "React":
        return <DiReact size="64" color={props.active ? active : "white"} />;
      case "aws":
        return (
          <SiAmazonaws size="64" color={props.active ? active : "white"} />
        );
      case "Material UI":
        return (
          <SiMaterialui size="64" color={props.active ? active : "white"} />
        );
      case "serverless":
        return (
          <SiServerless size="64" color={props.active ? active : "white"} />
        );
      case "GitHub":
        return <SiGithub size="64" color={props.active ? active : "white"} />;
      default:
        break;
    }
  };

  return <Box>{getIcon()}</Box>;
}

export default TechIcon;
