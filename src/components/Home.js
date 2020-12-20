import React from "react";
import "./Home.css";
import homeImg from "../media/Home/home-image.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home-image" src={homeImg} alt="Backdrop" />
      <div className="home-container">
        <div className="home-row">
          <Product
            id="1"
            title="Samsung Galaxy Tab A 10.1 (10.1 inch, RAM 2GB, ROM 32GB, Wi-Fi-Only), Blacks"
            price={14000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71PWPoS%2BNtL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Sony Bravia 108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)"
            price={35000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81lpllAGcBL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="3"
            title="Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant"
            price={2500.0}
            image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Sony SRS-XB23 Wireless Extra Bass Bluetooth Speaker with 12 Hours Battery Life (Red)"
            price={8000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/91Jjr4qmPfL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="boAt Bassheads 102 in Ear Wired Earphones with Mic(Jazzy Blue)"
            price={300.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61JtJL6Q9oL._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id="6"
            title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
            price={35000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            id="7"
            title="Nikon D5600 with AF-P 18-55 mm + AF-P 70-300 mm VR Kit with Bag and 16GB Memory Card Free"
            price={62000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41ysoC0mdHL.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="LG 10.5 Kg / 7.0 Kg Inverter Wi-Fi Washer Dryer"
            price={63000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Shqb-Be3L._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id="9"
            title="Godrej 190 L 5 Star Inverter Direct-Cool Single Door Refrigerator with Base Drawer"
            price={16000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/713ngE101kL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="10"
            title="Fitbit Surge Ultimate Fitness Super Watch, Small (Tangerine)"
            price={25000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/41aBcpoWWfL.jpg"
            rating={3}
          />
          <Product
            id="11"
            title="ASUS ZenBook Flip S OLED, Intel Evo Core i7-1165G7 11th Gen, 13.3-inch UHD Touch Thin and Light 2-in-1 Laptop "
            price={152000.0}
            image="https://images-na.ssl-images-amazon.com/images/I/7172hE7jSJL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
