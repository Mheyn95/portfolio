import React from "react";
import { Document } from "react-pdf";

const Resume = () => {
  return (
    <section className="my-5">
      <h1 id="Resume">Hire Me</h1>
      <Document file="../../assets/files/Resume.pdf">
        Download my Resume
      </Document>
    </section>
  );
};

export default Resume;
