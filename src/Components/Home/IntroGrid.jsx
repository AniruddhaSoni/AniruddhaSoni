import React from "react";
import "./IntroGrid.css";
import avatar from "../../assets/avatars/avatar_genral.svg";

export default function IntroGrid(data) {
  return (
    <>
      <div className="intro_container">
        <div className="intro">
          Hi. this is <span className="name">Aniruddha Soni</span>, an{" "}
          <strong>enthusiast web developer</strong> and{" "}
          <strong>UI/UX designer</strong> from India.{" "}
          {data.desc ? data.desc : " "}
        </div>
        <a href="/about" className="button">
          Know more...
        </a>
      </div>
      <img src={data.avatar || avatar} alt="" className="avatar" />
    </>
  );
}
