import React from "react";
import "./SocialIcon.css";

export default function SocialIcon(data) {
  return (
    <a
      href={data.socialLink}
      className="social_icon_container"
      style={{ background: `var(${data.background})` }}
      target="blank"
    >
      <img src={data.socialIcon} alt="" />
    </a>
  );
}
