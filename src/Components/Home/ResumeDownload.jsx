import React from "react";
import "./ResumeDownload.css";

export default function ResumeDownload() {
  return (
    <div className="resume_container">
      <a href="#">
        <span className="material-icons resume_button">file_download</span>
      </a>
      <h3>Download Resume</h3>
    </div>
  );
}
