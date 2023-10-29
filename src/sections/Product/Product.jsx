import React, { useState } from "react";
import Button from "../../components/Button/Button";
import { RiTruckLine } from "react-icons/ri";
import images from "../../data/images";
import "./Product.css";

const Product = () => {
  const [color, setColor] = useState("Red");
  const [image, setImage] = useState(1);

  const colorOptions = ["Rose", "Silver", "Gold", "Black", "Red"];

  return (
    <div className="product section-padding-x section-padding-y">
      <h1>
        Explore <span className="red">Our Headphones</span>
      </h1>

      <div className="product-showcase">
        <div className="product-content">
          <h4>Beats Solo3 Wireless Headphones - {color}</h4>
          <p>
            $249.00 <span className="line-through">$299.00</span>
          </p>
          <div className="product-content-color">
            <p>Color - {color}</p>
            <div className="product-content-color-choice">
              {colorOptions.map((option) => (
                <div
                  key={option}
                  className={`product-content-color-circle bg-${option.toLowerCase()}`}
                  onClick={() => setColor(option)}>
                  {color === option && <div className="bg-active"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product-img">
          <img src={images[`${color}${image}`]} alt="" />
          <div className="product-img-angles">
            {Array.from({ length: 7 }, (_, index) => (
              <img
                key={index}
                src={images[`${color}${index + 1}`]}
                alt=""
                onClick={() => setImage(index + 1)}
              />
            ))}
          </div>
        </div>
        <div className="product-cta">
          <div className="product-content-shiping">
            <p>
              <span className="product-content-shiping-icon">
                <RiTruckLine />
              </span>{" "}
              Delivery:
            </p>
            <p>In Stock</p>
            <p>Free Shipping</p>
          </div>
          <div className="product-content-cta">
            <Button />

            <p>
              Need some help?
              <a className="red" href="">
                {" "}
                Contact us.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
