import React from "react";
import "./styles.css";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="header" data-aos="fade-in">
      <div></div>
      <h1 className="title">Spacetagram</h1>
      <h4 className="subtitle">Developed by Jaden Wei</h4>
      <p>using NASA's Astronomy Photo of the Day API </p>
      <div className="search-container">
        <AiOutlineSearch className="search-icon" />
        <input placeholder="Search (YYYY-MM-DD)" />
      </div>
    </div>
  );
}

export default Header;
