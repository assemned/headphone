import React from "react";
import images from "../../data/images";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="section-padding-x">
        <Logo />
      </div>
      <div className="hero grid-hero section-padding-x">
        <div className="hero-content">
          <h1>
            Experience Sound <br />
            <span className="red">Like Never Before</span>
          </h1>
          <p>Experience Premium Sound Quality with Our Headphones</p>{" "}
          <div className="hero-cta">
            <Button />
            <p>
              Over 10,000 Satisfied <br />
              Customers and Counting!
            </p>
          </div>
        </div>
        <div className="hero-img">
          <img src={images.hero} alt="Headphones" />
        </div>
      </div>
    </>
  );
};

export default Hero;
