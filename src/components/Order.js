import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function Order({ order }) {

  const newTo = {
    pathname: "/invoice/${order.id}",
    order: order
  };

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Link to={newTo}><button className="btn btn-success order-btn">See Invoice</button></Link>
    </div>
  );
}

export default Order;
