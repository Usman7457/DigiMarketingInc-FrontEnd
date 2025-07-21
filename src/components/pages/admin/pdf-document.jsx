import React, { useRef } from "react";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import Stats from "./statistics";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PDF() {
  const pdfRef = useRef();
  return (
    <>
      <div className="container" ref={pdfRef}></div>
    </>
  );
}
