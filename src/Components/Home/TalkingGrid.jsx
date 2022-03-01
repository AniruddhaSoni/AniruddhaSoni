import React from "react";
import { Link } from "react-router-dom";
import "./TalkingGrid.css";

export default function TalkingGrid(details) {
  return (
    <div className="talking_grid_container">
      <div className="talking_grid_heading">{details.heading}</div>
      <div className="talking_grid_description">{details.description}</div>

      <Link to="/about#main" className="button">
        Know more...
      </Link>
    </div>
  );
}
