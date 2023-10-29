import React from "react";
import Button from "../../components/Button/Button";
import images from "../../data/images";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta section-padding-y">
      <div className="cta-container section-padding-x">
        <div className="cta-img">
          <img src={images.cta} alt="" />
        </div>
        <div className="cta-content">
          <h1>
            Experience the <br />
            Difference Today!
          </h1>
          <div className="btn-border">
            <Button />
          </div>
          <p>Limited Stock Available! Don't Miss Out!</p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
