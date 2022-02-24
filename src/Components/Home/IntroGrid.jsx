import React from "react";
import "./IntroGrid.css";
import avatar from "../../assets/avatars/avatar_genral.svg";

export default function IntroGrid(data) {
  return (
    <>
      <div className="intro_container">
        <div className="intro">
          Hi. this is <span className="name">Aniruddha Soni</span>,{" "}
          {data.desc || "an enthusiast web developer from India."}
        </div>
        <a href="/about" className="button">
          Know more...
        </a>
      </div>
      <img src={data.avatar || avatar} alt="" className="avatar" />
    </>
  );
}
