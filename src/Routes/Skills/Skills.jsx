import React from "react";
import IntroGrid from "../../Components/Home/IntroGrid";

import avatar from "../../assets/avatars/avatar_crossFingers.svg";

export default function Skills() {
  return (
    <section className="container">
      <div className="project_grid_container ">
        <div className="grid project_one">
          <IntroGrid
            avatar={avatar}
            desc={
              "Here are my some skills and tools that I have learnt through the journey."
            }
          />
        </div>

        {/* {json.map((data) => (
          <div className="grid">
            <ProjectGrid data={data}></ProjectGrid>
          </div>
        ))} */}
      </div>
    </section>
  );
}
