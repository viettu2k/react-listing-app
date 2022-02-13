import React from "react";
import "./ListingItem.css";

export default function ListingItem() {
  return (
    <div className="listing-item">
      <img
        src="https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="listing-details">
        <div className="listing-categories">categories</div>
      </div>
    </div>
  );
}
