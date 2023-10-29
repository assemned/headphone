import React from "react";
import axios from "axios";

import "./Button.css";

const Button = () => {
  const handleClick = async () => {
    const response = await axios
      .post(
        "http://localhost:5000/create-checkout-session",
        {
          items: [{ id: 1, quantity: 1, price: 24900 }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          window.location = response.data.url;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div onClick={handleClick} className="btn">
      BUY NOW
    </div>
  );
};

export default Button;
