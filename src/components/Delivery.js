import React, { useState } from "react";
import "./Delivery.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";

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
      .set({                                  //overwrites the data if present or not
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        address:{
          area: event.target.area.value,
          city: event.target.city.value,
          state: event.target.state.value,
          country: event.target.country.value,
          pincode: event.target.pincode.value
        }
      });

    // history.replace('/orders')
    history.push("./payment");
  };

  //console.log("here is ", userData);

  return (
    <div className="delivery">
      <h1>Add Your Delivery Address</h1>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          defaultValue={userData?.name}
        />{" "}
        <br />
        <label>Delivery Address : </label>
        <br />
        <label>Area : </label>
        <input
          name="area"
          placeholder="Enter your area"
          defaultValue={userData?.address?.area}
        />
        <label>City : </label>
        <input
          name="city"
          placeholder="Enter your city"
          defaultValue={userData?.address?.city}
        />
        <label>State : </label>
        <input
          name="state"
          placeholder="Enter your state"
          defaultValue={userData?.address?.state}
        />
        <label>Country : </label>
        <input
          name="country"
          placeholder="Enter your country"
          defaultValue={userData?.address?.country}
        />
        <label>Pincode : </label>
        <input
          name="pincode"
          placeholder="Enter your pincode"
          defaultValue={userData?.address?.pincode}
        />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          defaultValue={userData?.email}
        />
        <br />
        <label>Phone : </label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          defaultValue={userData?.phone}
        />
        <br />
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
}

export default Delivery;
