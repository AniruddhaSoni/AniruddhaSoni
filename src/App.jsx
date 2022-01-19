import Header from "./Components/Header/Header";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}

export default App;
