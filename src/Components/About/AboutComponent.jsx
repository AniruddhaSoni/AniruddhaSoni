import React from "react";
import "./AboutComponent.css";
import AboutComponentsDetails from "./AboutComponentsDetails";

export default function AboutComponent(data) {
  return (
    <div className="about_component_container">
      <div className="heading">{data.heading}</div>

      {data.json.map((project) => {
        return (
          <AboutComponentsDetails
            post={project.post}
            place={project.place}
            time={project.time}
            description={project.description || null}
            link={project.link}
          />
        );
      })}
    </div>
  );
}
