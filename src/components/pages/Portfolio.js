import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import ResumeModal from "../ResumeModal";
import TextHero from "../TextHero";

function Portfolio() {
  const [modal, setModal] = useState(false);

  const handleSetModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };

  const text =
    "This website was created with React and Material UI. It is hosted on an AWS S3 bucket, using Cloudformation and routing with Route 53.";

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 3,
        },
      }}
    >
      <Paper elevation={10}>
        <TextHero text={text} />
        <CardContainer toggleModal={handleSetModal} />
        {modal && <ResumeModal toggleModal={handleSetModal} />}
        {console.log(ResumeModal)}
      </Paper>
    </Box>
  );
}

export default Portfolio;
