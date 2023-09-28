import React from 'react';
import './App.css';
import PdfViewer from './PdfViewer';
import { Worker } from '@react-pdf-viewer/core';

function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
        <h2 style={{color: 'crimson'}}>Mapra Pdf Viewer</h2>
      </div>
      <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <PdfViewer></PdfViewer>
      </Worker>
      </div>
    </div>
  );
}

export default App;
