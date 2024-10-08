import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

function PDFViewer(props) {
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: () => {
      return `caroline-fairhurst-resume`;
    },
  });

  const { DownloadButton } = getFilePluginInstance;

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#eeeeee",
          borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          padding: "4px",
        }}
      >
        <div
          style={{
            padding: "5px",
          }}
        >
          <DownloadButton />
        </div>
      </div>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "600px",
        }}
      >
        <Viewer
          theme={{
            theme: "dark",
          }}
          plugins={[getFilePluginInstance]}
          fileUrl="/assets/resume.pdf"
        />
      </div>
    </Worker>
  );
}

export default PDFViewer;
