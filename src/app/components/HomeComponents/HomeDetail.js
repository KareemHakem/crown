import React from "react";

import "../HomeComponents/HomeDetailStyle.css";

export default function HomeDetail({ item }) {
  return (
    <>
      <div
        className={item.size === "large" ? "box-large-size" : "box-small-size"}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      >
        <div className="p_box">
          <h1>{item.title}</h1>
          <p>shop naw</p>
        </div>
      </div>
    </>
  );
}
