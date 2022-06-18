import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const url =
  "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

export default function Test({ doc, scale }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(100);
  const [pageNumber, setPageNumber] = useState(1);

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <div className="main">
        <Document
          file={doc}
          onLoadSuccess={onDocumentLoadSuccess}
          className=" flex justify-center "
        >
          <Page
            className=" flex items-center justify-center "
            pageNumber={pageNumber}
            scale={scale}
          />
          <Page
            className=" flex items-center justify-center "
            pageNumber={pageNumber + 1}
            scale={scale}
          />
        </Document>
      </div>
    </>
  );
}
