import React from "react";

import "../shopPageComponents/StyleShopPageComp.css";
import CardComp from "../cardCopm/CardComp";

export default function shopPageComp({ item }) {
  return (
    <>
      <div style={{marginTop:10}} >
        <h1 className="text-h1" >{item.title}</h1>
        <div className="item-library">
        {
        item.items.filter((item, index)=> index < 4)
        .map((item)=>(
          <CardComp item={item} key={item.id} />
        ))
      }
     
        </div>
      </div>
    </>
  );
}
