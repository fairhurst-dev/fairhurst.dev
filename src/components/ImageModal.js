import React, { useState } from "react";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  borderWidth: "5px",
  borderStyle: "solid",
  borderColor: "secondary.main",
};

function ImageModal({ imgURL, altText, height, width, margin }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        onClick={handleOpen}
        marginBottom="5px"
        margin={margin ? margin : ""}
        maxHeight={height}
        maxWidth={width}
        sx={{ cursor: "pointer" }}
      >
        <img alt={altText} width="100%" src={imgURL} />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img alt={altText} width="100%" src={imgURL} />
        </Box>
      </Modal>
    </>
  );
}

export default ImageModal;
