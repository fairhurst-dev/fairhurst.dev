import { GitHub, SaveAlt } from "@mui/icons-material";
import { Box } from "@mui/material";

const cardStyle = { color: "secondary.main", fontSize: 200 };

const cardData = [
  {
    title: "Magic Mirror",
    description: ["Read about my Magic Mirror build"],
    icon: (
      <Box marginBottom="5px" maxHeight="200px" maxWidth="200px">
        <img
          alt="exploded view"
          width="100%"
          src="https://fairhurstdevassets.s3.amazonaws.com/mirror/exploded_view_2.png"
        />
      </Box>
    ),
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
