import React from "react";
import Search from "./search";
import "./styles.css";

function Header({ dateInput, setDateInput }) {
  return (
    <div className="header" data-aos="fade-in">
      <div></div>
      <h1 className="title">Spacetagram</h1>
      <h4 className="subtitle">Developed by Jaden Wei</h4>
      <p>using NASA's Astronomy Photo of the Day API </p>

      <Search dateInput={dateInput} setDateInput={setDateInput} />
    </div>
  );
}

export default Header;
