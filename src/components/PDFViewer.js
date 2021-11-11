import { Worker, Viewer } from "@react-pdf-viewer/core";
import resume from "../media/resume.pdf";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PDFViewer(props) {
  const toolbarPluginInstance = toolbarPlugin(props.ToolbarPluginProps);
  const { Toolbar } = toolbarPluginInstance;

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
        }}
      >
        <Viewer plugins={[toolbarPluginInstance]} fileUrl={resume} />
      </div>
    </Worker>
  );
}

export default PDFViewer;
