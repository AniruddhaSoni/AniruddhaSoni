import React from "react";
import "./SocialGrid.css";
import linkedin from "./../../assets/social/linkedin.svg";
import twitter from "./../../assets/social/twitter.svg";
import github from "./../../assets/social/github.svg";
import mail from "./../../assets/social/mail.svg";

export default function SocialGrid() {
  return (
    <div className="social_grid_container">
      <a
        target="blank"
        href="https://www.linkedin.com/in/aniruddha-soni-7274261b9"
        className="social linkedin"
      >
        <img src={linkedin} alt="" />
      </a>
      <a
        target="blank"
        href="https://twitter.com/Anirudh96192399"
        className="social twitter"
      >
        <img src={twitter} alt="" />
      </a>
      <a
        target="blank"
        href="https://github.com/AniruddhaSoni"
        className="social github"
      >
        <img src={github} alt="" />
      </a>
      <a
        target="blank"
        href="mailto:anirudh.soni007@gmail.com"
        className="social mail"
      >
        <img src={mail} alt="" />
      </a>
    </div>
  );
}
