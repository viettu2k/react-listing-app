import React from "react";
import "./ListingItem.css";

export default function ListingItem() {
  return (
    <div className="listing-item">
      <img
        className="listing-img"
        src="https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="listing-details">
        <div className="listing-categories">
          <span className="listing-category">Buy</span>
          <span className="listing-category">Sell</span>
        </div>
        <span className="listing-title">Awesome property available.</span>
        <hr />
        <span className="listing-time">2 days ago</span>
        <p className="listing-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem iusto
          similique illo laudantium, nam reiciendis? Inventore, eius similique
        </p>
      </div>
    </div>
  );
}
