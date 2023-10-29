import React from "react";
import {
  RiVolumeMuteLine,
  RiHeadphoneLine,
  RiBatteryLine,
  RiMusic2Line,
  RiBluetoothFill,
  RiBatteryChargeLine,
} from "react-icons/ri";
import images from "../../data/images";
import "./Features.css";

const Features = () => {
  return (
    <div className="features section-padding-x section-padding-y">
      <h2>
        Our <span className="red">Features</span>
      </h2>

      <div className="features-container">
        <div className="feature-1">
          <RiVolumeMuteLine className="feature-icon red" />
          <p className="feature-title">Noise-Cancellation Technology</p>
          <p className="feature-text">
            Find Your Zen: Block Out the World with Noise-Cancellation
          </p>
        </div>

        <div className="feature-2">
          <RiHeadphoneLine className="feature-icon red" />
          <p className="feature-title">Ergonomic Design for Comfort</p>
          <p className="feature-text">
            Experience extended comfort during use.
          </p>
        </div>

        <div className="feature-3">
          <RiBatteryLine className="feature-icon red" />
          <p className="feature-title">40-Hour Battery Life</p>
          <p className="feature-text">
            All-Day Entertainment: Enjoy Music Nonstop{" "}
          </p>
        </div>

        <div className="feature-4">
          <RiMusic2Line className="feature-icon red" />
          <p className="feature-title">Studio-Grade Audio Quality</p>
          <p className="feature-text">
            Immerse Yourself in Music with Unmatched Sound Clarity{" "}
          </p>
        </div>

        <div className="feature-5">
          <RiBluetoothFill className="feature-icon red" />
          <p className="feature-title">Wireless Bluetooth Connectivity</p>
          <p className="feature-text">Wireless Freedom: No Cords, No Limits </p>
        </div>

        <div className="feature-6">
          <RiBatteryChargeLine className="feature-icon red" />
          <p className="feature-title">Fast Battery Charging</p>
          <p className="feature-text">
            Recharge quickly and get back to your music in no time.{" "}
          </p>
        </div>

        <div className="feature-img">
          <img src={images.features1} alt="Headphones" />
          <img src={images.features2} alt="Headphones" />
        </div>
      </div>
    </div>
  );
};

export default Features;
