import React from "react";
import { Link } from "react-router-dom";
import { RiHeadphoneFill } from "react-icons/ri";

import "./Logo.css";

const Logo = () => {
  return (
    <Link className="logo-container" to="/">
      <p className="logo">
        HEAD
        <span className="red">LOCK</span>
        <RiHeadphoneFill className="logo-icon red" />
      </p>
    </Link>
  );
};

export default Logo;
