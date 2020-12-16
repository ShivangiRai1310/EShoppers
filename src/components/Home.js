import React from 'react';
import "./Home.css";
import homeImg from "../media/Home/home-image.jpg";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img className="home-image" src={homeImg} alt="Backdrop" />

                <div className="home-row">
                    <Product />
                    <Product />
                </div>
                <div className="home-row">
                    {/* PRODUCT */}
                    {/* PRODUCT */}
                    {/* PRODUCT */}
                </div>
                <div className="home-row">
                    {/* PRODUCT */}
                </div>

            </div>
        </div>
    )
}

export default Home
