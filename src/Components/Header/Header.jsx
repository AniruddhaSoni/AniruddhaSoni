import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <Navbar></Navbar>
      <a href="mailto:anirudh.soni007@gmail.com" className="contact_button">
        Contact
      </a>
    </header>
  );
}
