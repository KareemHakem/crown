import React from "react";
import "./CardCompStyle.css";
export default function CardComp({item}) {

  console.log(item)
  return (
    <div className="item-cards">
      <img className="item-imgs" src={item.imageUrl} alt="images" />
      <div className="flex">
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
     
    </div>
  );
}
