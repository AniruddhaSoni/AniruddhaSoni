import React from "react";
import avatar from "./../../assets/avatars/avatar_wink.svg";
import ProjectGrid from "../../Components/Project/ProjectGrid";
import json from "./../../data/project.json";

import "./Project.css";
import "./../../css/Responsive.css";
import IntroGrid from "../../Components/Home/IntroGrid";

export default function Project() {
  return (
    <section className="container">
      <div className="project_grid_container ">
        <div className="grid project_one">
          <IntroGrid
            avatar={avatar}
            desc={
              "an enthusiast web developer form India. Here are my some self and freelance projects."
            }
          />
        </div>

        {json.map((data) => (
          <div className="grid">
            <ProjectGrid data={data}></ProjectGrid>
          </div>
        ))}
      </div>
    </section>
  );
}
