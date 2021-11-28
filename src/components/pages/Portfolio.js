import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { Box } from "@mui/system";
import ResumeModal from "../ResumeModal";
import { Typography, Container } from "@mui/material";

function Portfolio() {
  const [modal, setModal] = useState(false);

  const handleSetModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };

  const boxStyle = {
    "& > :not(style)": {
      m: "0 auto",
    },
  };

  const text =
    "This website was created with React and Material UI. It is hosted on an AWS S3 bucket, using Cloudformation and routing with Route 53.";

  return (
    <Box sx={boxStyle}>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ px: 3, py: 2 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {text}
        </Typography>
      </Container>
      <CardContainer toggleModal={handleSetModal} />
      {modal && <ResumeModal toggleModal={handleSetModal} />}
    </Box>
  );
}

export default Portfolio;
