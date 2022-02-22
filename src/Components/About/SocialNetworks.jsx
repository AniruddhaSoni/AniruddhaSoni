import React from "react";
import SocialIcon from "./SocialIcon";
import "./SocialNetworks.css";
import linkedin from "./../../assets/social/linkedin.svg";
import twitter from "./../../assets/social/twitter.svg";
import github from "./../../assets/social/github.svg";
import mail from "./../../assets/social/mail.svg";
import snapchat from "./../../assets/social/snapchat.svg";
import instagram from "./../../assets/social/instagram.svg";

var socials = [
  {
    id: "linkedin",
    socialLink: "https://www.linkedin.com/in/aniruddha-soni-7274261b9",
    background: "--background_linkedin",
    social_icon: linkedin,
  },
  {
    id: "twitter",
    socialLink: "https://twitter.com/Anirudh96192399",
    background: "--background_twitter",
    social_icon: twitter,
  },
  {
    id: "github",
    socialLink: "https://github.com/AniruddhaSoni",
    background: "--background_github",
    social_icon: github,
  },
  {
    id: "mail",
    socialLink: "mailto:anirudh.soni007@gmail.com",
    background: "--background_mail",
    social_icon: mail,
  },
  {
    id: "snapchat ",
    socialLink:
      "https://www.snapchat.com/add/this.aniruddha?share_id=pk-T1uEVA8c&locale=en-US",
    background: "--background_snapchat",
    social_icon: snapchat,
  },
  {
    id: "instagram",
    socialLink: "https://instagram.com/this.aniruddha?utm_medium=copy_link",
    background: "--background_instagram",
    social_icon: instagram,
  },
];

export default function SocialNetworks() {
  return (
    <div className="social_networks">
      <div className="heading">Social Networks</div>

      <div className="social_icons_container">
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social.id}
              socialLink={social.socialLink}
              background={social.background}
              socialIcon={social.social_icon}
            />
          );
        })}
      </div>
    </div>
  );
}
