import React, { useState } from "react";
import "./Delivery.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";
import Progressbar from "./Progressbar";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"
></link>;

function Delivery() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const [userData, setUserData] = useState([]);

  if (user) {
    db.collection("users")
      .doc(user?.uid)
      .onSnapshot((doc) => {
        setUserData(doc.data());
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("the event is ", event.target.name.value);
    db.collection("users")
      .doc(user?.uid)
      .set({
        //overwrites the data if present or not
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        address: {
          area: event.target.area.value,
          city: event.target.city.value,
          state: event.target.state.value,
          country: event.target.country.value,
          pincode: event.target.pincode.value,
        },
      });

    // history.replace('/orders')
    history.push("./payment");
  };

  //console.log("here is ", userData);

  return (
    <div className="delivery">
      <Progressbar status="2" />

      <div class="container">
        <div class="row">
          <div class="card d-flex justify-content-center mx-auto my-3 p-5">
            <h2>Add Your Shipping Details</h2>

            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group col-md-12 first">
                  {" "}
                  <label for="inputName" className="heading">
                    NAME <span>*</span>
                  </label>{" "}
                  <input
                    name="name"
                    id="inputName"
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    defaultValue={userData?.name}
                    required
                  />
                </div>
              </div>

              
                <label for="inputArea" className="heading del">
                  DELIVERY ADDRESS
                </label>
              

              <div class="form-row">
                <div class="form-group col-md-6 pt-0">
                  {" "}
                  <label for="inputArea">
                    AREA <span>*</span>
                  </label>{" "}
                  <input
                    name="area"
                    id="inputArea"
                    placeholder="Enter your area"
                    defaultValue={userData?.address?.area}
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group col-md-6 pt-0">
                  {" "}
                  <label for="inputCity">
                    CITY <span>*</span>
                  </label>{" "}
                  <input
                    name="city"
                    id="inputCity"
                    placeholder="Enter your city"
                    defaultValue={userData?.address?.city}
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  {" "}
                  <label for="inputState">
                    STATE <span>*</span>
                  </label>{" "}
                  <input
                    name="state"
                    id="inputState"
                    placeholder="Enter your state"
                    defaultValue={userData?.address?.state}
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  {" "}
                  <label for="inputCountry">
                    COUNTRY <span>*</span>
                  </label>{" "}
                  <input
                    name="country"
                    id="inputCountry"
                    placeholder="Enter your country"
                    defaultValue={userData?.address?.country}
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  {" "}
                  <label for="inputPincode">
                    PINCODE <span>*</span>
                  </label>{" "}
                  <input
                    name="pincode"
                    placeholder="Enter your pincode"
                    defaultValue={userData?.address?.pincode}
                    id="inputPincode"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  {" "}
                  <label for="inputEmail" className="heading">
                    EMAIL <span>*</span>
                  </label>{" "}
                  <input
                    name="email"
                    id="inputEmail"
                    type="email"
                    class="form-control"
                    placeholder="Enter your email"
                    defaultValue={userData?.email}
                    required
                  />
                  <div id="email_error" class="val_error"></div>
                </div>
                <div class="form-group col-md-6">
                  {" "}
                  <label for="inputPhone" className="heading">
                    PHONE <span>*</span>
                  </label>{" "}
                  <input
                    type="tel"
                    name="phone"
                    id="inputPhone"
                    placeholder="Enter your phone"
                    defaultValue={userData?.phone}
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="form-button pt-4">
                {" "}
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                  Proceed to Payment
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Delivery;
