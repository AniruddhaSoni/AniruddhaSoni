import React from "react";
import "./ResumeDownload.css";

export default function ResumeDownload() {
  return (
    <div className="resume_container">
      <a href="https://drive.google.com/file/d/1JqM7Yob-YqzJFAhTIqjvirWEjfd3ynpd/view" download>
        <span className="material-icons resume_button">file_download</span>
      </a>
      <h3>Download Resume</h3>
    </div>
  );
}
