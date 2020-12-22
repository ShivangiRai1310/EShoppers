import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating, desc }) {
  const [{ basket }, dispatch] = useStateValue();

  //console.log("this is the basket>>>");

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const newTo = {
    pathname: "/productDetails/${id}",
    id: id,
    title: title,
    image: image,
    price: price,
    rating: rating,
    desc: desc
  };

  return (
    
      <div className="product">
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={image} alt="product" />

        <button onClick={addToBasket}>Add to Basket</button>
        <Link to={newTo}><button>More Details</button></Link>
      </div>
  );
}

export default Product;
