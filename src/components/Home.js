import React from "react";
import "./Home.css";
// import homeImg from "../media/Home/1.png";
import { Link } from "react-router-dom";
import Category from "./Categories";
import Carousel from "react-bootstrap/Carousel";
//import Button from 'react-bootstrap/Button';

function Home() {

  return (
    <div className="home">
      {/* <img className="home-image" src={homeImg} alt="Backdrop" /> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Home-Page%2F1.png?alt=media&token=3894c9b4-df86-4903-a8c2-3bdb337280ec"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h1>Discover something new</h1>
            <p className="h3-responsive font-weight-bold">Experience the difference.Experience the lifestyle.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Home-Page%2F2.png?alt=media&token=e5e8ceb9-848f-4e7f-b9c4-212f721f7097"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h1>A fresh approach to shopping</h1>
            <p className="h3-responsive font-weight-bold">An exciting place for the whole family to shop.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Home-Page%2F3.png?alt=media&token=fb77dea9-7408-40d6-b822-6d758206dbb2"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h1>Always ahead</h1>
            <p className="h3-responsive font-weight-bold">Favorite brands and hottest trends.Find it, love it, buy it.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      <Category />
      
    </div>
  );
}

export default Home;
