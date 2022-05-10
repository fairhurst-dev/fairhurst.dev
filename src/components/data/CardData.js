import { GitHub, SaveAlt } from "@mui/icons-material";

const cardStyle = { color: "secondary.main", fontSize: 200 };

const cardData = [
  {
    title: "Magic Mirror",
    description: ["Read about my Magic Mirror build"],
    icon: <GitHub sx={cardStyle} />,
    link: "/portfolio/mirror",
  },
  {
    title: "Github",
    description: ["Check out my repos"],
    icon: <GitHub sx={cardStyle} />,
    link: "https://github.com/fairhurst-dev/",
  },
  {
    title: "Resume",
    description: ["Click to download"],
    icon: <SaveAlt sx={cardStyle} />,
    link: "",
  },
];

export default cardData;
