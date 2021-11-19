import React, { useState } from "react";
import CardContainer from "../CardContainer";
import { Box } from "@mui/system";
import ResumeModal from "../ResumeModal";
import TextHero from "../TextHero";

function Portfolio() {
  const [modal, setModal] = useState(false);

  const handleSetModal = () => {
    if (modal) setModal(false);
    else setModal(true);
  };

  const boxStyle = {
    "& > :not(style)": {
      m: 3,
    },
    backgroundColor: "secondary.main",
  };

  const text =
    "This website was created with React and Material UI. It is hosted on an AWS S3 bucket, using Cloudformation and routing with Route 53.";

  return (
    <Box sx={boxStyle}>
      <TextHero text={text} />
      <CardContainer toggleModal={handleSetModal} />
      {modal && <ResumeModal toggleModal={handleSetModal} />}
    </Box>
  );
}

export default Portfolio;
