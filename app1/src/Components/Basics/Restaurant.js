import React from "react";
import "./style.css";
const Restaurant = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle" > Breakfast</span>
          <h2 className="card-title">Maggi</h2>
 <span className="card-description subtle">lorem is a very food lipsum and doing good</span>
       <div className="card-read">Read</div>

          </div>
          <img src={image} alt="images" className="card-media"/>
 <span className="card-tag subtle">Order now</span>
        </div>
      </div>
    </>
  );
};

export default Restaurant;
