import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiHeadphoneFill,
  RiInstagramFill,
  RiMessengerFill,
  RiWhatsappFill,
  RiFacebookCircleFill,
} from "react-icons/ri";
import axios from "axios";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    axios
      .post("https://headphone-api-syfz.onrender.com/newsletter", { email })
      .then((response) => {
        setMessage("Subscription successful!");
      })
      .catch((error) => {
        setMessage("Subscription failed. Please try again.");
      });
  };

  return (
    <div className="footer">
      <div className="footer-up section-padding-x">
        <div className="footer-infos">
          <Link to="/">
            <p>
              HEADLOCK
              <RiHeadphoneFill />
            </p>
          </Link>
          <div className="footer-info">
            <a href="">123 Main Street, NewYork, USA</a>
            <a href="">+1-555-123-4567</a>
            <a href="">info@headlock.com</a>
          </div>
          <div className="footer-links">
            <a href="">
              <RiFacebookCircleFill />
            </a>
            <a href="">
              <RiInstagramFill />
            </a>
            <a href="">
              <RiMessengerFill />
            </a>
            <a href="">
              <RiWhatsappFill />
            </a>
          </div>
        </div>
        <div className="footer-newsletter">
          <h6>Subscribe to Our Newsletter!</h6>
          <p>Get the latest updates and offers directly in your inbox.</p>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit">SUBSCRIBE NOW</button>
            <p>{message}</p>
          </form>
        </div>
      </div>
      <div className="footer-down section-padding-x">
        <p>© 2023 HeadLock. All rights reserved.</p>
        <div className="footer-privacy">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
