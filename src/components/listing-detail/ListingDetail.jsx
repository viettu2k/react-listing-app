import React from "react";
import "./ListingDetail.css";

export default function ListingDetail() {
  return (
    <div className="listing-detail">
      <div className="listing-detail-content">
        <img
          src="https://images.pexels.com/photos/2606383/pexels-photo-2606383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <h2 className="listing-detail-title">Awesome property</h2>
        <div className="listing-detail-action">
          <i class="fas fa-edit"></i>
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
  );
}
