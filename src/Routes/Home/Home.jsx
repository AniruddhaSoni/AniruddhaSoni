import React, { useContext } from "react";
import "./Home.css";
import IntroGrid from "../../Components/Home/IntroGrid";
import MapGrid from "../../Components/Home/MapGrid";
import ResumeDownload from "../../Components/Home/ResumeDownload";
import GitStats from "../../Components/Home/GitStats";
import SocialGrid from "../../Components/Home/SocialGrid";
import TalkingGrid from "../../Components/Home/TalkingGrid";

import aboutBackground from "../../assets/home/about.png";
import darkaboutBackground from "./../../assets/home/about-dark.png";

import projectBackground from "../../assets/home/project.png";
import darkprojectBackground from "./../../assets/home/project-dark.png";

import skillsBackground from "../../assets/home/skills.png";
import darkskillsBackground from "./../../assets/home/skills-dark.png";

import lightMap from "../../assets/map_light.png";
import darkMap from "../../assets/map_dark.png";
import { Link } from "react-router-dom";

import "./../../css/Responsive.css";
import { DarkModeContext } from "../../DarkModeContext";

export default function Home() {
  const darkMode = useContext(DarkModeContext).darkMode;

  var map = darkMode === false ? lightMap : darkMap;

  var aboutImage = darkMode === false ? aboutBackground : darkaboutBackground;

  var projectImage =
    darkMode === false ? projectBackground : darkprojectBackground;

  var skillsImage =
    darkMode === false ? skillsBackground : darkskillsBackground;
  return (
    <section className="container">
      <div className="home_grid_container ">
        <div className="grid one">
          <IntroGrid />
        </div>

        <div className="grid two" style={{ backgroundImage: `url(${map})` }}>
          <MapGrid />
        </div>

        <div
          className="grid three background"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <h1 className="heading background_heading">About Me</h1>

          <ul className="topic_list">
            <li>
              <Link to="/about" className="topics">
                Experiences
              </Link>
            </li>
            <li>
              <Link to="/about" className="topics">
                Social Networks
              </Link>
            </li>
            <li>
              <Link to="/about" className="topics">
                Community And Open-Source
              </Link>
            </li>
          </ul>

          <Link to="/about" className=" button grid_button">
            About
          </Link>
        </div>

        <div className="grid four">
          <ResumeDownload />
        </div>
        <a
          href="https://github.com/AniruddhaSoni"
          target="blank"
          className="grid five"
        >
          <GitStats />
        </a>
        <div
          className="grid six background"
          style={{ backgroundImage: `url(${projectImage})` }}
        >
          <h1 className="heading background_heading">My Projects</h1>

          <ul className="topic_list">
            <li>
              <Link to="/project" className="topics">
                Bill Generator
              </Link>
            </li>
            <li>
              <Link to="/project" className="topics">
                React Recipe App
              </Link>
            </li>
            <li>
              <Link to="/project" className="topics">
                GDSC Personal Portfolio
              </Link>
            </li>
          </ul>

          <Link to="/project" className=" button grid_button">
            My Projects
          </Link>
        </div>
        <div className="grid seven">
          <SocialGrid />
        </div>
        <div className="grid eight background">
          <TalkingGrid
            heading="How it started vs how it's going."
            description="It's all started with curiosity how web works and now I am here as a
        good web developer."
          />
        </div>
        <div className="grid nine background">
          <TalkingGrid
            heading="Let's create something."
            description="I accept freelance jobs, colaboration offers with companies, startup and brands or if you have any idea we can build it together."
          />
        </div>
        <div
          className="grid ten background"
          style={{ backgroundImage: `url(${skillsImage})` }}
        ></div>
      </div>
    </section>
  );
}
