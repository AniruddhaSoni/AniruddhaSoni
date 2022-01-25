import React from "react";
import "./Project.css";
import avatar from "./../../assets/avatars/avatar_wink.svg";

export default function Project() {
  return (
    <section className="container">
      <div className="project_grid_container">
        <div className="grid intro">
          <div className="intro_container">
            <div className="intro">
              Hi. this is <span className="name">Aniruddha Soni</span>,an
              enthusiast web developer form India. Here are my some self and
              freelance projects.
            </div>
            <a href="/about" className="button">
              Know more...
            </a>
          </div>
          <img src={avatar} alt="" className="avatar circle" />
        </div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
        <div className="grid"></div>
      </div>
    </section>
  );
}
