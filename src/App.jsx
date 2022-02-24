import Header from "./Components/Header/Header";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Project from "./Routes/Project/Project";
import Skills from "./Routes/Skills/Skills";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <footer></footer>
    </>
  );
}

export default App;
