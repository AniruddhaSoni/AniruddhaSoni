import React, { useEffect, useState } from "react";
import "./GitStats.css";

var theme = "light";

export default function GitStats() {
  const [url, setURL] = useState("");

  useEffect(() => {
    if (theme === "light") {
      setURL(
        "https://github-readme-stats.vercel.app/api?username=aniruddhasoni&show_icons=true"
      );
    }
  }, [url]);

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
