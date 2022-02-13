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
        <h2 className="listing-detail-title">
          Awesome property
          <div className="listing-detail-action">
            <i class="listing-detail-action-icon fas fa-edit"></i>
            <i class="listing-detail-action-icon fas fa-trash-alt"></i>
          </div>
        </h2>
        <div className="listing-detail-meta-info">
          <span className="listing-detail-author">
            Author - <strong>Timber</strong>
          </span>
          <span className="listing-detail-time">1 day ago</span>
        </div>

        <p className="listing-detail-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
          veritatis voluptatum? Quo, culpa corporis vero dolores sint ad,
          reiciendis ea suscipit nesciunt accusamus similique autem maxime ut
          eveniet! Eius, animi. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Labore, veritatis voluptatum? Quo, culpa corporis
          vero dolores sint ad, reiciendis ea suscipit nesciunt accusamus
          similique autem maxime ut eveniet! Eius, animi. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Labore, veritatis voluptatum? Quo,
          culpa corporis vero dolores sint ad, reiciendis ea suscipit nesciunt
          accusamus similique autem maxime ut eveniet! Eius, animi. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Labore, veritatis
          voluptatum? Quo, culpa corporis vero dolores sint ad, reiciendis ea
          suscipit nesciunt accusamus similique autem maxime ut eveniet! Eius,
          animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Labore, veritatis voluptatum? Quo, culpa corporis vero dolores sint
          ad, reiciendis ea suscipit nesciunt accusamus similique autem maxime
          ut eveniet! Eius, animi. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Labore, veritatis voluptatum? Quo, culpa corporis
          vero dolores sint ad, reiciendis ea suscipit nesciunt accusamus
          similique autem maxime ut eveniet! Eius, animi.
        </p>
      </div>
    </div>
  );
}
