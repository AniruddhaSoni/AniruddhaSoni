import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../DarkModeContext";
import "./GitStats.css";
// prussian

export default function GitStats() {
  const darkMode = useContext(DarkModeContext).darkMode;

  const theme = darkMode === false ? "light" : "dark";

  const [url, setURL] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setURL(
        "https://github-readme-stats.vercel.app/api?username=aniruddhasoni&show_icons=true&hide_border=true"
      );
    } else if (theme === "dark") {
      setURL(
        "https://github-readme-stats.vercel.app/api?username=aniruddhasoni&show_icons=true&bg_color=25272c&hide_border=true&text_color=fff"
      );
    }
  }, [theme]);

  return (
    <div className="gitstats_container">
      <iframe
        className="gitstats"
        title="gitstats"
        src={url}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
