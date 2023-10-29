import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Logo } from "../../components/index";
import { Footer } from "../../sections/index";
import "./Confirmation.css";

const Confirmation = () => {
  const { id } = useParams();
  const [paymentData, setPaymentData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/payment/${id}`).then((response) => {
      setPaymentData(response.data);
    });
  }, [id]);

  return (
    <>
      <div className="confirmation section-padding-x section-padding-y">
        <div className="confirmation-logo">
          <Logo />
        </div>
        <h1>
          Thank You <span className="red">"{paymentData.firstName}"</span> for
          Your Purchase!
        </h1>
        <p>We are grateful for your trust in our products and services.</p>

        <h2>Order Details</h2>
        <p>
          <span className="confirmation-headers">Order:</span> Beats Solo3
          Wireless Headphones
          <br />
          <span className="confirmation-headers">Date of Purchase:</span>{" "}
          {paymentData.createdAt}
          <br />
          <span className="confirmation-headers">Shipping Address:</span>{" "}
          {paymentData.shippingAddress}
        </p>

        <h2>What's Next</h2>
        <p>
          - You will receive a confirmation email shortly with all the order
          details.
          <br />
          - Our team is diligently preparing your order for shipment.
          <br />- If you have any questions or need assistance, please don't
          hesitate to reach out to our customer support team at{" "}
          <a className="red" href="">
            info@headlock.com
          </a>{" "}
          or{" "}
          <a className="red" href="">
            +1-555-123-4567
          </a>
          .
        </p>

        <h2>Stay Connected</h2>
        <p>
          Stay up to date with the latest from{" "}
          <strong className="red">HEADLOCK</strong> by following us on social
          media. Connect with us on our Social Media.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
