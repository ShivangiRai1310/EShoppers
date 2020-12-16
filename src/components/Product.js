import React from 'react';
import "./Product.css";
import productImg from "../media/Home/products/1.jpg";

function Product({title, price, image, rating}) {

    return (
        <div className="product">

            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={productImg} alt="product" />

            <button>Add to Basket</button>
            
        </div>
    )
}

export default Product
