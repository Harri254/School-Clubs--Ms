import React from "react";
import { Link } from "react-router-dom";
import Club from "../components/Club";
import "./Header.css"; // Import CSS file
import Home from "../pages/Home";

const Header = () => {
  return (
    <>
        <header className="header">
        <div className="logo">🌟 Logo</div>

        <h1 className="title">Website Title</h1>

        <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
        </nav>
        </header>
        
    </>
  );
};

export default Header;
