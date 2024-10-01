import { Document } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function PDFViewer() {

  return (
    <Document file="/assets/resume.pdf" />
  )
}

export default PDFViewer;
