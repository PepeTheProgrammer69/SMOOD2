import React from "react";
import { Link } from "react-router-dom";
import NewsBox from "./HomePage/NewsBox.jsx";

function Header() {
  return (
    <header className="logo-header">
      <Link
        to="/"
      ><h1 className="logo-text">SMOOD</h1></Link>
      <NewsBox />
    </header>
  );
}

export default Header;