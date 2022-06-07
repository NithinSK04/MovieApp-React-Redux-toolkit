import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie Name </div>
      </Link>
      <div className="user-image">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}

export default Header;
