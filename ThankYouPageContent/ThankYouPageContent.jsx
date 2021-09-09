import React from "react";
import "./thankyou.css"
const ThankYouPageContent = () => {
  return (
    <div className="thankyou-page-content">
      <h1>Thank You For You Order</h1>
      <p>
        <strong>Please check your email</strong> for further instructions on how
        to complete your account setup.
      </p>
      <hr />
      <p>
        Having trouble? <a href="/contact">Contact us</a>
      </p>
    </div>
  );
};

export default ThankYouPageContent;
