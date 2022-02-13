import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-section">
      <div className="hero-text">
        <span className="hero-text-title">Listings</span>
        <span className="hero-text-subtitle">Listing Application</span>
      </div>
      <img
        src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
