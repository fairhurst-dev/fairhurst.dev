import { GitHub } from "@mui/icons-material";
import { SaveAlt } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

const cardStyle = { color: "secondary.main", fontSize: 200 };

const cardData = [
  {
    title: "Github",
    description: ["Check out the fairhurst.dev repo"],
    icon: <GitHub sx={cardStyle} />,
    link: "https://github.com/caroline717/fairhurst.dev",
  },
  {
    title: "Resume",
    description: ["Click to download"],
    icon: <SaveAlt sx={cardStyle} />,
    link: "",
  },
  {
    title: "Linkedin",
    description: ["Connect with me on Linkedin"],
    icon: <LinkedIn sx={cardStyle} />,
    link: "https://www.linkedin.com/in/carolinefairhurst99/",
  },
];

export default cardData;
