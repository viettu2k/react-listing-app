import React from "react";
import "./TopBar.css";
import { Link } from "react-router-dom";

// React component returns JSX kind or markup
export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <i className="topbar-social-icon fab fa-instagram-square"></i>
        <i className="topbar-social-icon fab fa-facebook-square"></i>
        <i className="topbar-social-icon fab fa-linkedin"></i>
        <i className="topbar-social-icon fab fa-twitter-square"></i>
      </div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-list-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="topbar-list-item">ABOUT</li>
          <li className="topbar-list-item">CONTACT</li>
          <li className="topbar-list-item">
            <Link to="/create">CREATING PROPERTY</Link>
          </li>
          <li className="topbar-list-item">LOGOUT</li>
        </ul>
      </div>
      <div className="topbar-right">
        <img
          className="topbar-profile-pic"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <i className="topbar-search fas fa-search"></i>
      </div>
    </div>
  );
}
