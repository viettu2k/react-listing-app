import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">Marketplace</span>
        <span className="hero-text-subtitle">Property Listing</span>
      </div>
      <img
        className="hero-img"
        src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
