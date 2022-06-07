import React, { useState } from "react";
import { Box } from "@mui/system";
import { Dialog, DialogContent } from "@mui/material";

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

      <Dialog
        fullWidth={true}
        maxWidth={"lg"}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <DialogContent>
          <img alt={altText} width="100%" src={imgURL} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageModal;
