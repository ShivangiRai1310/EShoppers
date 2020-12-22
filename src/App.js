import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Invoice from "./components/Invoice";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";

const promise = loadStripe(
  "pk_test_51HzmHQI3pvAPJEPtmot3q4jat6cFVxH2LRRyXIckr3m8K0lKoIYSkPvAUbI6vIf7wcXkCfN87GthqJKTT4kNs8QG00yWgopQAf"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //firebase listener
    //will only run once when th app component loads...like an if stmt in React

    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is >> ", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        //everytime a user logs in the data is dipatched to the data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/productDetails/:id" component={ProductDetails} />

          <Route path="/invoice/:id" component={Invoice} />

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          {/* <Route path="/productDetails">
            <Header />
            <ProductDetails />
          </Route> */}

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
