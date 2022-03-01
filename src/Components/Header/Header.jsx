import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "./Navbar/Navbar.css";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../DarkModeContext";

export default function Header() {
  const [show, setShow] = useState(false);

  const darkMode = useContext(DarkModeContext).darkMode;
  const setDark = useContext(DarkModeContext).setDarkMode;

  return (
    <header className="">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className={show === true ? "navbar navbar_show" : "navbar"}>
          <ul className="nav_links ">
            <li
              className="navbar_button close_button"
              onClick={() => {
                setShow(!show);
              }}
            >
              <i className="material-icons">close</i>
            </li>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <NavLink to="/about">About</NavLink>
            </li>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <NavLink to="/project">Project</NavLink>
            </li>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li
              onClick={() => {
                setShow(!show);
              }}
            >
              {/* <a href="mailto:anirudh.soni007@gmail.com" className="">
                Contact
              </a> */}
              <Link href="/about#contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          style={{ alignSelf: "center", display: "flex", alignItems: "center" }}
        >
          <div
            className={darkMode === true ? "mode dark" : "mode"}
            onClick={() => {
              setDark(!darkMode);
            }}
          >
            <div> </div>
          </div>

          <div
            className="navbar_button"
            onClick={() => {
              setShow(!show);
            }}
          >
            <i className="material-icons">menu</i>
          </div>
        </div>
      </div>
    </header>
  );
}
