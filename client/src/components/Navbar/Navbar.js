import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navlogocontainer">
        <h1>Ethereal</h1>
      </div>
      <div className="navlistcontainer">
        <ul className="navlist">
          <a href="/">
            <li className="navlistelements">HOME</li>
          </a>
          {/* <a href="/about">
            <li className="navlistelements">ABOUT</li>
          </a> */}
          <a href="/accounts">
            <li className="navlistelements">ACCOUNTS</li>
          </a>
          <a href="/create">
            <li className="navlistelements">REGISTER</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
