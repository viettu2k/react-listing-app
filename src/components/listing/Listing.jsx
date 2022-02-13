import React from "react";
import ListingItem from "../listing-item/ListingItem";
import "./Listing.css";

export default function Listing() {
  return (
    <div className="listing-section">
      All Properties
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
      <ListingItem />
    </div>
  );
}
