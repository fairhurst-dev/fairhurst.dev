import React, { useState } from "react";
import CardContainer from "../CardContainer";
import Hero from "../Hero";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import ResumeModal from "../ResumeModal";

function About() {
  const [modal, setModal] = useState(false);

  const handleSetModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 3,
        },
      }}
    >
      <Paper elevation={10}>
        <Hero />
        <CardContainer toggleModal={handleSetModal} />
        {modal && <ResumeModal toggleModal={handleSetModal} />}
        {console.log(ResumeModal)}
      </Paper>
    </Box>
  );
}

export default About;
