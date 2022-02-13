import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-section">
      <div className="sidebar-subsection">
        <span className="sidebar-title">about me</span>
        <img
          className="sidebar-img"
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto
          neque, illum odio deleniti.
        </p>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-category">Buy</li>
          <li className="sidebar-category">Sell</li>
          <li className="sidebar-category">Rent</li>
          <li className="sidebar-category">Hostel</li>
          <li className="sidebar-category">B & B</li>
          <li className="sidebar-category">Hotel</li>
        </ul>
      </div>
      <div className="sidebar-subsection">
        <span className="sidebar-title">follow us</span>
        <div className="sidebar-social-icons">
          <i className="sidebar-social-icon fab fa-instagram-square"></i>
          <i className="sidebar-social-icon fab fa-facebook-square"></i>
          <i className="sidebar-social-icon fab fa-linkedin"></i>
          <i className="sidebar-social-icon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
