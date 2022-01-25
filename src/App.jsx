import Header from "./Components/Header/Header";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";
import Project from "./Routes/Project/Project";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
