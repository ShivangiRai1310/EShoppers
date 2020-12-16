import React from 'react';
import "./Product.css";
import productImg from "../media/Home/products/1.jpg";

function Product() {
    return (
        <div className="product">

            <div className="product-info">
                <p>OPPO A53 (Fancy Blue, 4GB RAM, 64GB Storage) with No Cost EMI/Additional Exchange Offers</p>
                <p className="product-price">
                    <small>₹</small>
                    <strong>12,990.00 </strong>
                </p>
                <div className="product-rating">
                    <p>&</p><p>&</p>
                </div>
            </div>

            <img src={productImg} alt="product" />

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
