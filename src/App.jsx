import Header from "./Components/Header/Header";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Project from "./Routes/Project/Project";
import Skills from "./Routes/Skills/Skills";
import { DarkModeContext } from "./DarkModeContext";
import { useEffect, useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode === true) {
      document.querySelector("body").classList.add("darkMode");
    } else if (darkMode === false) {
      document.querySelector("body").classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <footer></footer>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
