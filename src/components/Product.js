import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, data }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket>>>");

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
      },
    });
  };

  const newTo = {
    pathname: "/productDetails/${id}",
    id: id,
    data: data
  };

  return (
    
      <div className="product">
        <div className="product-info">
          <p>{data.title}</p>
          <p className="product-price">
            <small>₹</small>
            <strong>{data.price}</strong>
          </p>
          <div className="product-rating">
            {Array(data.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={data.image} alt="product" />

        <button onClick={addToBasket}>Add to Basket</button>
        <Link to={newTo}><button>More Details</button></Link>
      </div>
  );
}

export default Product;
