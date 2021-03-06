import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PDFViewer from "./PDFViewer";

function ResumeModal(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={props.toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <PDFViewer />
        </Box>
      </Modal>
    </div>
  );
}

export default ResumeModal;
