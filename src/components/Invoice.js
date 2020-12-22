import React, { useState, useEffect } from "react";
import "./Invoice.css";
import logo from "../media/logo2.png";
import { Redirect, useHistory } from "react-router-dom";
import moment from "moment";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";

function Invoice(props) {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const order = props.location.order;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") 
        .doc(user?.uid) 
        .onSnapshot( (doc) =>
          setUserData(doc.data())
        );
    } else {
      setUserData([]);
    }
  }, []);

  console.log("Current data: ", userData);

  if (!user) {
    history.replace("/");
    // <Redirect to="/" />
  }

  function printFunction() {
    window.print();
  }

  return (
    <div className="invoice">
      <div class="receipt-content">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="col-md-12">
              <div class="invoice-wrapper">
                <div className="invoice-header">
                  {/* <img className="header-logo" src={logo} alt="brand-logo" /> */}
                  <h1>INVOICE</h1>
                  {/* <p>Invoice No: <br/> 
                  <strong>#1</strong>
                  </p> */}
                </div>
                <div className="invoice-content">
                  <div class="intro">
                    Hi <strong>{userData.name}</strong>,
                    <br />
                    This is the receipt for a payment of{" "}
                    <strong>₹{order.data.amount / 100}</strong> for your order
                    at EShoppers.
                  </div>

                  <div class="payment-info">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>Order Id.</span>
                        <strong>{order.id}</strong>
                      </div>
                      <div class="col-sm-6 text-right">
                        <span>Payment Date</span>
                        <strong>
                          {moment
                            .unix(order.data.created)
                            .format("MMMM Do YYYY, h:mma")}
                        </strong>
                      </div>
                    </div>
                  </div>

                  <div class="payment-details">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>Shipping Details</span>
                        <strong>{userData.name}</strong>
                        <p>
                        {userData.address.area} <br />
                        {userData.address.city} <br />
                        {userData.address.state} <br />
                        {userData.address.country} <br />
                        {userData.address.pincode} <br />
                          Phone : {userData.phone}<br />
                          Email : {user.email}
                          <br />
                        </p>
                      </div>
                      <div class="col-sm-6 text-right">
                        <span>Payment To</span>
                        <strong>EShoppers Pvt. Ltd.</strong>
                        <p>
                          UVCE, K.R. Circle <br />
                          Bangalore <br />
                          Karnataka <br />
                          560001 <br />
                          9123456789 <br />
                          <a href="mailto:eshoppers@gmail.com">
                            eshoppers@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="line-items">
                    <div>
                      <table class="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <th class="center">#</th>
                            <th>Product</th>
                            <th class="hidden-xs">Description</th>
                            {/* <th class="hidden-480">Discount</th> */}
                            <th>Total</th>
                          </tr>
                        </thead>

                        <tbody>
                          {order.data.basket?.map((item) => (
                            <tr>
                              <td class="center">1</td>
                              <td>
                                <a href="#">{item.title}</a>
                              </td>
                              <td class="hidden-xs">{item.title}</td>
                              {/* <td class="hidden-480"> --- </td> */}
                              <td>₹{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div class="total text-right">
                      <p class="extra-notes">
                      <p><strong>Order Status : </strong> Order placed</p>
                      <p><strong>Payment Status : </strong> Payment completed successfully</p>
                      </p>
                      <div class="field">
                        Subtotal <span>₹{order.data.amount / 100}</span>
                      </div>
                      <div class="field">
                        Shipping <span>₹0.00</span>
                      </div>
                      <div class="field grand-total">
                        Total <span>₹{order.data.amount / 100}</span>
                      </div>
                    </div>

                    <div class="print">
                      <a href="#" onClick={printFunction}>
                        <i class="fas fa-print"></i>
                        Print this receipt
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="footer">Copyright © 2020. EShoppers Pvt. Ltd.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
