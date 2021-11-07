import React from "react";

import HomeDetail from "../../components/HomeComponents/HomeDetail";
import HomePageData from "../../data/HomePageData";

export default function HomePage() {
  return (
    <>
      <div style={{width:"90%", margin:"auto", minHeight:"120vh" }} >
        <div style={{display:"flex", flexWrap:"wrap" }} >
          {
          HomePageData.map((item) => (
            <HomeDetail item={item} key={item.id} />
          ))
          }
        </div>
      </div>
    </>
  );
}
