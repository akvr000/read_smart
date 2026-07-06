// import { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// export default function PdfReader({ pdfFile, fileName }) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div className="w-full flex flex-col items-center bg-white px-6 py-4">
//       {/* Book Metadata & Nav Control Row matching your exact image layout */}
//       <div className="w-full max-w-4xl flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
//         <div>
//           <h2 className="text-lg font-semibold text-gray-900">{fileName.replace('.pdf', '')}</h2>
//           <p className="text-xs text-gray-400 mt-0.5">Page {pageNumber} / {numPages || 0} · Tap a word or select text</p>
//         </div>

//         {/* Sleek Navigation Arrow Selectors */}
//         <div className="flex items-center gap-3">
//           <button 
//             disabled={pageNumber <= 1}
//             onClick={() => setPageNumber(p => p - 1)}
//             className="p-1 text-gray-400 hover:text-black disabled:opacity-30 disabled:hover:text-gray-400 cursor-pointer transition"
//           >
//             ‹
//           </button>
//           <input 
//             type="text" 
//             value={pageNumber} 
//             readOnly 
//             className="w-12 text-center border border-gray-200 rounded-lg py-1 text-sm font-medium outline-none bg-gray-50"
//           />
//           <button 
//             disabled={pageNumber >= numPages}
//             onClick={() => setPageNumber(p => p + 1)}
//             className="p-1 text-gray-400 hover:text-black disabled:opacity-30 disabled:hover:text-gray-400 cursor-pointer transition"
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* Clean PDF Rendering Core Container */}
//       <div className="w-full max-w-4xl flex justify-center overflow-x-auto">
//         <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//           <Page 
//             pageNumber={pageNumber} 
//             renderTextLayer={true} 
//             renderAnnotationLayer={false}
//             width={800} 
//           />
//         </Document>
//       </div>
//     </div>
//   );
// }