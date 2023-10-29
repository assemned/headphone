import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const Button = () => {
  return (
    <Link className="btn" to="/checkout">
      BUY NOW
    </Link>
  );
};

export default Button;
