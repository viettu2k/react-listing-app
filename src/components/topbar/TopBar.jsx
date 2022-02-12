import React from "react";
import "./TopBar.css";

// React component returns JSX kind or markup
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">Left</div>
      <div className="topbar-center">Center</div>
      <div className="topbar-right">Right</div>
    </div>
  );
}
