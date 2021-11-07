import React from "react";

import ShopPageData from "../../data/ShopPageData";
import ShopPageComp from "../../components/shopPageComponents/ShopPageComp";
import CardComp from "../../components/cardCopm/CardComp";

import "../shopPage/StyleShopPage.css";

export default function ShopPage() {
  return (
    <div style={{minHeight:"370vh"}} >
      {ShopPageData.map((item) => (
        <ShopPageComp item={item} key={item.id} />
      ))}
    </div>
  );
}
