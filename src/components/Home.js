import React from "react";
import "./Home.css";
//import homeImg from "../media/Home/home-image.jpg";
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
            src="https://www.indiumsoftware.com/blog/wp-content/uploads/2018/04/5-ways-big-data-in-e-commerce.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Discover something new</h1>
            <p className="h3-responsive font-weight-bold">Experience the difference.Experience the lifestyle.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.informaticsinc.com/application/files/6615/1458/2953/5topecommerceplatformsonthemarket-900.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>A fresh approach to shopping</h1>
            <p className="h3-responsive font-weight-bold">An exciting place for the whole family to shop.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            src="https://www.indiumsoftware.com/blog/wp-content/uploads/2019/10/Performance-testing-for-eCommerce-websites.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Always ahead</h1>
            <p className="h3-responsive font-weight-bold">Favorite brands and hottest trends.Find it, love it, buy it.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Category />
      
    </div>
  );
}

export default Home;
