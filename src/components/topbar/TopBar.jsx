import React from "react";
import "./TopBar.css";

// React component returns JSX kind or markup
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <i class="fab fa-instagram-square"></i>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-twitter-square"></i>
      </div>
      <div className="topbar-center"></div>
      <div className="topbar-right">Right</div>
    </div>
  );
}
