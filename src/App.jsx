import Header from "./Components/Header/Header";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import About from "./Routes/About/About";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
      </Routes>
    </>
  );
}

export default App;
