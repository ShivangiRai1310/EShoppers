import React from "react";
import "./PaymentSuccess.css";
import {useHistory } from "react-router-dom";

function PaymentSuccess() {

    const history = useHistory();

    function handleClick() {
        history.push("/orders");
      }

  return (
    <div className="payment-success">
      <div className="payment-container">
        
          <div class="d-flex justify-content-center mb-5 flex-column align-items-center"> 
            <span class="check1">
              <i class="fa fa-check"></i>
            </span>
            <h1 class="heading">Order Confirmed</h1>
            <h2 class="green"> <b>CONGRATULATIONS!</b> Your payment is successful.</h2>
            <p class="text"> Your order with EShoppers has been placed successfully and will arrive with 7 working days. <br />
            Thank You For trusting us. 
            </p>
            
            <h2 class="orange">! HAPPY SHOPPING !</h2>
          </div>
          <button class="btn btn-danger order-button" onClick={handleClick}>
            Go to your Order
          </button>
        
      </div>
    </div>
  );
}

export default PaymentSuccess;
