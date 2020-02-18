import React from "react";
import  "./citycard.css";
export default function CityCart(props) {
  return (
    <div className="displayCart">
      {props.cart.map((el, i) => (
        <div className="city">
          <img src={el.pic} alt="cityPic" />
          <div className="btnpluscity">
            <p>{el.title}</p>
            <button className="btn">See openings</button>
          </div>
        </div>
      ))}
    </div>
  );
}