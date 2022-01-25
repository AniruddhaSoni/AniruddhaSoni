import React from "react";
import "./AboutComponentsDetails.css";
import blankIcon from "./../../assets/blank_icon.svg";

export default function AboutComponentsDetails(details) {
  return (
    <div className="detail">
      <img src={details.icon || blankIcon} alt="" className="detail_icon" />
      <div className="detail_container">
        <h1 className="detail_heading">{details.post}</h1>
        <div className="detail_placeTime">
          <span className="detail_post">{details.place}</span>
          <span className="detail_time">{details.time}</span>
        </div>

        {details.description && (
          <p className="detail_description">{details.description}</p>
        )}
        {details.link && (
          <a href={details.link} className="detail_link">
            View Certificate
          </a>
        )}
      </div>
    </div>
  );
}
