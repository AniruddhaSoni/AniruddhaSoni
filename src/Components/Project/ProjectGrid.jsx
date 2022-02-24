import React from "react";
import "./ProjectGrid.css";
import "./../../css/Responsive.css";

export default function ProjectGrid({ data }) {
  return (
    <div className="projectGrid">
      <h2 className="projectHeading">{data.name || null}</h2>
      <ul className="projectTech">
        {data.tech.map((tech) => <li key={tech}> {tech}</li>) || null}
      </ul>
      <a
        href={data.link || null}
        target={`blank`}
        className="button projectButton"
      >
        View
      </a>
    </div>
  );
}
