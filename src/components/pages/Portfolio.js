import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { Box } from "@mui/system";
import ResumeModal from "../ResumeModal";
import { Typography, Container } from "@mui/material";
import TechnologyBar from "../TechnologyBar";

function Portfolio() {
  const [modal, setModal] = useState(false);

  const titleStyle = {
    color: "secondary.main",
    backgroundColor: "none",
    fontFamily: "jost",
    fontStyle: "italic",
  };

  const handleSetModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };

  const boxStyle = {
    "& > :not(style)": {
      m: "0 auto",
    },
  };

  return (
    <Box sx={boxStyle}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ px: 3, py: 2 }}
      >
        <Typography sx={titleStyle} textAlign="center" variant="h4">
          Website powered by:
        </Typography>
        <TechnologyBar />
      </Container>
      <CardContainer toggleModal={handleSetModal} />
      {modal && <ResumeModal toggleModal={handleSetModal} />}
    </Box>
  );
}

export default Portfolio;
