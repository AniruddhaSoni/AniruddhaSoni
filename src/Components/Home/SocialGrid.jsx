import React from "react";
import "./SocialGrid.css";
import linkedin from "./../../assets/social/linkedin.svg";
import twitter from "./../../assets/social/twitter.svg";
import discord from "./../../assets/social/discord.svg";
import mail from "./../../assets/social/mail.svg";

export default function SocialGrid() {
  return (
    <div className="social_grid_container">
      <div className="social linkedin">
        <img src={linkedin} alt="" />
      </div>
      <div className="social twitter">
        <img src={twitter} alt="" />
      </div>
      <div className="social discord">
        <img src={discord} alt="" />
      </div>
      <div className="social mail">
        <img src={mail} alt="" />
      </div>
    </div>
  );
}
