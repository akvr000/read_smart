import { useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import Logo from "../icons/Logo";
import PlusIcon from "../icons/PlusIcon";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function Hero() {
  const fileInputRef = useRef(null);

  // Stores the uploaded PDF
  const [pdfFile, setPdfFile] = useState(null);

  // Stores total number of pages
  const [numPages, setNumPages] = useState(0);

  // Stores current page
  const [pageNumber, setPageNumber] = useState(1);

  // Runs when user selects a PDF
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setPdfFile(file);
    setPageNumber(1);
  };

  // Runs when PDF is loaded successfully
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Go to previous page
  const previousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  // Go to next page
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-10">
      {!pdfFile ? (
        <div className="flex flex-col items-center text-center max-w-3xl gap-3">
          <div className="bg-gray-200 p-4 rounded-2xl">
            <Logo className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">
            Read Smart — Your AI Reading Tutor
          </h1>

          <p className="text-sm text-gray-500 max-w-md mb-2">
            Upload a PDF, tap any word for instant meaning, highlight any
            sentence or paragraph to ask AI for an explanation, save vocabulary,
            review with flashcards, and export your learning anytime.
          </p>

          <button
            onClick={() => fileInputRef.current.click()}
            className="flex items-center gap-2 rounded-lg px-6 py-2 bg-black hover:bg-gray-800 text-white font-semibold text-sm transition"
          >
            <PlusIcon />
            Upload your first PDF
          </button>

          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center w-full gap-5">
          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={previousPage}
              disabled={pageNumber === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <p className="font-medium">
              Page {pageNumber} of {numPages}
            </p>

            <button
              onClick={nextPage}
              disabled={pageNumber === numPages}
              className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>

          {/* PDF Viewer */}
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p>Loading PDF...</p>}
          >
            <Page pageNumber={pageNumber} width={700} />
          </Document>
        </div>
      )}
    </main>
  );
}

export default Hero;