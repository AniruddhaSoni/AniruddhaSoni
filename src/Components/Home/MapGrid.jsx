import React from "react";
import "./MapGrid.css";
import avatar from "./../../assets/avatars/avatar_wink_funny.svg";

export default function MapGrid() {
  return (
    <div className="map_avatar_container">
      <img src={avatar} alt="" className="map_avatar" />
    </div>
  );
}
