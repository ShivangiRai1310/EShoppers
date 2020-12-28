import React from "react";
import "./Progressbar.css";

function Progressbar({status}) {
  return (
    <div className="progressbar">
      <div class="container" id="progressbar">
        <div class="card-body">
          <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between">
            <div class={ "step " + (status>=1 ? "completed" : null) }>
              <div class="step-icon-wrap">
                <div class="step-icon">
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </div>
              <h4 class="step-title">Order Summary</h4>
            </div>
            <div class={ "step " + (status>=1 ? "completed" : null) }>
              <div class="step-icon-wrap">
                <div class="step-icon">
                  <i class="fas fa-clipboard-check"></i>
                </div>
              </div>
              <h4 class="step-title">Confirm Checkout</h4>
            </div>
            <div class={ "step " + (status>=2 ? "completed" : null) } >
              <div class="step-icon-wrap">
                <div class="step-icon">
                  <i class="fas fa-shipping-fast"></i>
                </div>
              </div>
              <h4 class="step-title">Shipping Details</h4>
            </div>
            <div class={ "step " + (status>=3 ? "completed" : null) }>
              <div class="step-icon-wrap">
                <div class="step-icon">
                  <i class="fas fa-edit"></i>
                </div>
              </div>
              <h4 class="step-title">Review Order & Delivery</h4>
            </div>
            <div class={ "step " + (status>=3 ? "completed" : null) }>
              <div class="step-icon-wrap">
                <div class="step-icon">
                  <i class="far fa-credit-card"></i>
                </div>
              </div>
              <h4 class="step-title">Payment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progressbar;
