import React from "react";
import "./Home.css";
import IntroGrid from "../../Components/Home/IntroGrid";
import MapGrid from "../../Components/Home/MapGrid";
import lightMap from "../../assets/map_light.png";
import DarkmodeGrid from "../../Components/Home/DarkmodeGrid";
import GitStats from "../../Components/Home/GitStats";
import SocialGrid from "../../Components/Home/SocialGrid";
import TalkingGrid from "../../Components/Home/TalkingGrid";

var map = lightMap;

export default function Home() {
  return (
    <section className="home">
      <div className="grid_container">
        <div className="grid one">
          <IntroGrid />
        </div>

        <div className="grid two" style={{ backgroundImage: `url(${map})` }}>
          <MapGrid />
        </div>

        <div className="grid three">nothing here</div>

        <div className="grid four">
          <DarkmodeGrid />
        </div>
        <div className="grid five">
          <GitStats />
        </div>
        <div className="grid six">grid six</div>
        <div className="grid seven">
          <SocialGrid />
        </div>
        <div className="grid eight">
          <TalkingGrid
            heading="How it started vs how it's going."
            description="It's all started with curiosity how web works and now I am here as a
        good web developer."
          />
        </div>
        <div className="grid nine">
          <TalkingGrid
            heading="Let's create something."
            description="I accept freelance jobs, colaboration offers with companies, startup and brands or if you have any idea we can build it together."
          />
        </div>
        <div className="grid ten">grid ten</div>
      </div>
    </section>
  );
}
