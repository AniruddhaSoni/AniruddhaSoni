import React from "react";
import "./About.css";
import aboutAvatar from "./../../assets/avatars/avatar_laptop.svg";
import AboutComponent from "../../Components/About/AboutComponent";
import projects from "./../../data/projects.json";
import comunity from "./../../data/community.json";
import certs from "./../../data/certs.json";
import SocialNetworks from "../../Components/About/SocialNetworks";
import hindi from "./../../assets/hindi.svg";
import english from "./../../assets/english.svg";

import "./../../css/Responsive.css";

export default function About() {
  return (
    <section className="about_container">
      <div className="about">
        <img src={aboutAvatar} alt="" className="about_avatar" />
        <div className="about_description">
          <p>
            Hi!, I am <span className="name">Aniruddha</span>, a hardworking and
            enthusiast undergraduate student learning towards B.tech in
            Information and Technology. Seeking to use my superior knowledge of
            full-stack web developement skills ( priory front-end ).
          </p>

          <p>
            It was all started with a curosity that “how web works”, then I
            learnt some web skills like HTML, CSS and JavaScript in early
            teenage but real thing happend in the midst of a global pandemic
            about 2019 where I learnt node.js, react.js, PHP and many web based
            frameworks.
          </p>

          <p>
            In the mid of 2020 I started working as a freelancer offering design
            and developement services in friends and their friends too.
          </p>

          <p>
            In the mid of 2021 I joined Augnaar Technologies as a web intern,
            there I learnt more about PHP and SQL based databases.
          </p>

          <p>
            Now I am the team leader at Augnaar technologies and I have
            developed backend and the augnaar technologies landing page and
            mentar landing page.
          </p>
          <p>
            Currently I am also web lead of Google’s Developer Student’s Club
            RTU. There we as a team arranged many workshops and build several
            projects.
          </p>
          <p>If you need me... Write me!!</p>
        </div>
      </div>

      <AboutComponent heading="Experiances" json={projects} />

      <AboutComponent heading="Community and Open-Source" json={comunity} />

      <SocialNetworks />

      <div className="languages">
        <div className="heading">Languages</div>
        <div className="languages_container">
          <img src={hindi} alt="" className="language" />
          <img src={english} alt="" className="language" />
        </div>
      </div>

      <AboutComponent heading="Certs" json={certs} />
    </section>
  );
}
