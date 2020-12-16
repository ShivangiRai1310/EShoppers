import React from 'react';
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
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={4}
                    />
                    <Product 
                        id="2"
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={5}
                    />
                </div>
                <div className="home-row">
                    <Product 
                        id="3"
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={3}
                    />
                    <Product 
                        id="4"
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={5}
                    />
                    <Product 
                        id="5"
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={2}
                    />
                </div>
                <div className="home-row">
                    <Product 
                        id="6"
                        title="OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={12990.00}
                        image=""
                        rating={2}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
