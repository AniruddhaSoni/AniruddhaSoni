import React from "react";
import "./Home.css";
import IntroGrid from "../../Components/Home/IntroGrid";
import MapGrid from "../../Components/Home/MapGrid";
import lightMap from "../../assets/map_light.png";
import DarkmodeGrid from "../../Components/Home/DarkmodeGrid";
import GitStats from "../../Components/Home/GitStats";
import SocialGrid from "../../Components/Home/SocialGrid";

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
        <div className="grid eight">grid eight</div>
        <div className="grid nine">grid nine</div>
        <div className="grid ten">grid ten</div>
      </div>
    </section>
  );
}
