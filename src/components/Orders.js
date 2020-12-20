import React, { useState, useEffect } from "react";
import "./Orders.css";
import Order from "./Order";
import { db } from "../firebase";
import { useStateValue } from "./StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") //look for users collection(table)
        .doc(user?.uid) //in that select a specific user with the uid same as that of logged in user
        .collection("orders") //collect that user's orders collection(table)
        .orderBy("created", "desc") //arrange all his orders in desc order based on date created
        .onSnapshot((
          snapshot //get a realtime snapshot of the query
        ) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id, //and map through it to get each order id n its corressponding data
              data: doc.data(), //and store it in orders object using setorders func (useState hook)
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
