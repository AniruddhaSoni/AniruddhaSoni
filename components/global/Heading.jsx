import React from "react";

export default function Heading(props) {
  return (
    <h1 className="text-4xl lg:text-8xl font-extrabold text-accent">
      {props.heading}
    </h1>
  );
}
