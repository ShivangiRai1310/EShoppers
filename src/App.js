import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import PaymentSuccess from "./components/PaymentSuccess";
import Delivery from "./components/Delivery";
import Invoice from "./components/Invoice";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

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

          <Route path="/category-details/:name" component={CategoryDetails} />

          <Route path="/productDetails/:id" component={ProductDetails} />

          <Route path="/invoice/:id" component={Invoice} />

          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
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
            <Footer />
          </Route>

          <Route path="/delivery">
            <Header />
            <Delivery />
            <Footer />
          </Route>

          <Route path="/payment-successful">
            <PaymentSuccess />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
