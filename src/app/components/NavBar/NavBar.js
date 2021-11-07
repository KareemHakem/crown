import React from "react";

import { Link, useHistory } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./NavBarStyle.css";
export default function NavBar() {
  const history = useHistory();
  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div className="navbar">
      <img
        style={{
          height: 50,
          width: 50,
          objectFit: "contain",
          cursor: "pointer",
        }}
        src="/images/crown.svg"
        alt="crown"
        onClick={handleGoHome}
      />
      <div className="links">
        <Link className="link" to="/shopPage">
          shop
        </Link>

        <Link className="link" to="/contact">
          contact
        </Link>

        <Link className="link" to="/singIn">
          sing In
        </Link>

        <Link className="link" to="/Cart">
          <LocalMallIcon
            style={{ backgroundColor: "#fff", cursor: "pointer" }}
          />
        </Link>
      </div>
    </div>
  );
}
