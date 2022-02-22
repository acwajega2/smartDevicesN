import React from "react";

import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
      <label className="logo">SmartDevices</label>
      <ul className="nav-ul">
        <li className="ul-li active">
          <a href="" className="li-a">
            <Link className="li-a" to="/">
              Home
            </Link>
          </a>
        </li>
        <li className="ul-li">
          <a href="" className="li-a">
            <Link className="li-a" to="about">
              About
            </Link>
          </a>
        </li>
        <li className="ul-li">
          <a href="" className="li-a">
            <Link className="li-a" to="services">
              Servicess
            </Link>
          </a>
        </li>
        <li className="ul-li">
          <a href="" className="li-a">
            <Link className="li-a" to="contact">
              Contact
            </Link>
          </a>
        </li>
        <li className="ul-li">
          <a href="" className="li-a">
            <Link className="li-a" to="feedback">
              Feedback
            </Link>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
