import React from "react";
import { RiStarFill } from "react-icons/ri";
import images from "../../data/images";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews section-padding-x section-padding-y">
      <h1 className="header">
        Our Customers’ <span className="red">Reviews</span>
      </h1>
      <div className="reviews-container">
        <div className="review ">
          <div className="review-img">
            <img src={images.review2} alt="" />
          </div>
          <div className="review-content">
            <h6>Michael Balack</h6>
            <p>
              "I'm in audio heaven with these headphones. The sound quality is
              exceptional, and the noise-cancellation feature is a game-changer
              during my daily commute."
            </p>
            <div className="review-stars">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>
          </div>
        </div>

        <div className="review">
          <div className="review-img">
            <img src={images.review1} alt="" />
          </div>
          <div className="review-content">
            <h6>John Peter</h6>
            <p>
              "Investing in these headphones was the best decision I've made. No
              more tangled cords, and the wireless connectivity is seamless. I'm
              enjoying my music like never before."
            </p>
            <div className="review-stars">
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
              <RiStarFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
