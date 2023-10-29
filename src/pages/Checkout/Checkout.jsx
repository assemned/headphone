import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/index";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import images from "../../data/images";
import "./Checkout.css";

const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    cardNumber: "",
    expirationDate: "",
    cvc: "",
    billingAddress: "",
    country: "",
    city: "",
    shippingAddress: "",
    postalCode: "",
  });

  const [message, setMessage] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCheckoutData({ ...checkoutData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!checkoutData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(checkoutData.email)) {
      errors.email = "Email is invalid";
    }

    if (!checkoutData.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!checkoutData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    if (!/^\d{16}$/.test(checkoutData.cardNumber)) {
      errors.cardNumber = "Card Number is invalid";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(checkoutData.expirationDate)) {
      errors.expirationDate = "Invalid expiration date (MM/YY)";
    } else {
      const [month, year] = checkoutData.expirationDate.split("/");
      const currentDate = new Date();
      const expirationDate = new Date(`20${year}`, month - 1);

      if (expirationDate < currentDate) {
        errors.expirationDate = "Card is expired";
      }
    }

    if (!/^\d{3,4}$/.test(checkoutData.cvc)) {
      errors.cvc = "CVC is invalid";
    }

    if (!checkoutData.billingAddress.trim()) {
      errors.billingAddress = "Billing Address is required";
    }

    if (!checkoutData.country.trim()) {
      errors.country = "Country is required";
    }

    if (!checkoutData.city.trim()) {
      errors.city = "City is required";
    }

    if (!checkoutData.shippingAddress.trim()) {
      errors.shippingAddress = "Shipping Address is required";
    }

    if (!/^\d{5}$/.test(checkoutData.postalCode)) {
      errors.postalCode = "Postal Code is invalid";
    }

    if (!isChecked) {
      errors.isChecked =
        "You must agree to the Terms and Conditions and Privacy Policy";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data is valid:", checkoutData);
    } else {
      setErrors(validationErrors);
    }
    axios
      .post("https://headphone-api-syfz.onrender.com/payment", checkoutData)
      .then((response) => {
        const paymentId = response.data._id;
        setMessage("Subscription successful!");
        navigate(`/confirmation/${paymentId}`);
      })
      .catch((error) => {
        setMessage("");
      });
  };

  return (
    <div className="checkout">
      <div className="checkout-img section-padding-y">
        <img src={images.cta} alt="" />
        <h1>
          Experience Sound <br />
          Like Never Before
        </h1>
      </div>
      <div className="checkout-content">
        <div className="checkout-logo">
          <Logo />
        </div>
        <h4>Checkout</h4>
        <form onSubmit={handleSubmit} noValidate>
          <div className="checkout-content-section">
            <h6>
              <FaCheckCircle className="checkout-icon red" />
              PERSONAL INFORMATION
            </h6>
            <div className="checkout-content-box">
              <label htmlFor="email">
                Email address
                {errors.email && (
                  <div className="checkout-error">{errors.email}</div>
                )}
              </label>
              <input
                type="email"
                name="email"
                value={checkoutData.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
              />
              <label htmlFor="firstName">
                First Name
                {errors.firstName && (
                  <div className="checkout-error">{errors.firstName}</div>
                )}
              </label>
              <input
                type="firstName"
                name="firstName"
                value={checkoutData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
              />
              <label htmlFor="lastName">
                Last Name
                {errors.lastName && (
                  <div className="checkout-error">{errors.lastName}</div>
                )}
              </label>
              <input
                type="lastName"
                name="lastName"
                value={checkoutData.LastName}
                onChange={handleInputChange}
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="checkout-content-section">
            <h6>
              <FaCheckCircle className="checkout-icon red" />
              PAYEMENT
            </h6>
            <div className="checkout-content-box">
              <label htmlFor="cardNumber">
                Card number
                {errors.cardNumber && (
                  <div className="checkout-error">{errors.cardNumber}</div>
                )}
              </label>
              <input
                type="cardNumber"
                name="cardNumber"
                value={checkoutData.cardNumber}
                onChange={handleInputChange}
                placeholder="XXXX XXXX XXXX XXXX"
              />
              <label htmlFor="expirationDate">
                Expiration Date
                {errors.expirationDate && (
                  <div className="checkout-error">{errors.expirationDate}</div>
                )}
              </label>
              <input
                type="expirationDate"
                name="expirationDate"
                value={checkoutData.expirationDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
              />
              <label htmlFor="cvc">
                CVC
                {errors.cvc && (
                  <div className="checkout-error">{errors.cvc}</div>
                )}
              </label>
              <input
                type="cvc"
                name="cvc"
                value={checkoutData.cvc}
                onChange={handleInputChange}
                placeholder="XXX"
              />
              <label htmlFor="billingAddress">
                Billing address
                {errors.billingAddress && (
                  <div className="checkout-error">{errors.billingAddress}</div>
                )}
              </label>
              <input
                type="billingAddress"
                name="billingAddress"
                value={checkoutData.billingAddress}
                onChange={handleInputChange}
                placeholder="Billing address"
              />
            </div>
          </div>

          <div className="checkout-content-section">
            <h6>
              <FaCheckCircle className="checkout-icon red" />
              Shipping Information
            </h6>
            <div className="checkout-content-box">
              <label htmlFor="country">
                Country
                {errors.country && (
                  <div className="checkout-error">{errors.country}</div>
                )}
              </label>
              <input
                type="country"
                name="country"
                value={checkoutData.country}
                onChange={handleInputChange}
                placeholder="Your Country"
              />
              <label htmlFor="city">
                City
                {errors.city && (
                  <div className="checkout-error">{errors.city}</div>
                )}
              </label>
              <input
                type="city"
                name="city"
                value={checkoutData.city}
                onChange={handleInputChange}
                placeholder="Your city"
              />
              <label htmlFor="shippingAddress">
                Shipping Address
                {errors.shippingAddress && (
                  <div className="checkout-error">{errors.shippingAddress}</div>
                )}
              </label>
              <input
                type="shippingAddress"
                name="shippingAddress"
                value={checkoutData.shippingAddress}
                onChange={handleInputChange}
                placeholder="Shipping Address"
              />
              <label htmlFor="postalCode">
                Postal Code
                {errors.postalCode && (
                  <div className="checkout-error">{errors.postalCode}</div>
                )}
              </label>
              <input
                type="postalCode"
                name="postalCode"
                value={checkoutData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
              />
              <div className="checkout-content-confirm">
                <h4>$249.00</h4>
                {!isChecked && (
                  <div className="checkout-error">{errors.isChecked}</div>
                )}
                <div className="checkout-checkbox">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    value={checkoutData.isChecked}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="myCheckbox">
                    I accept the Terms and Conditions and Privacy Policy
                  </label>
                </div>
              </div>
            </div>
            <button className="btn" type="submit">
              BUY NOW
            </button>
            <p>{message}</p>
          </div>
          <p className="checkout-copyright">Copyright © 2023 HeadLock</p>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
