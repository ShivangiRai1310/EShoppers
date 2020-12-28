import React from 'react';
import "./ProductDetails.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";

function ProductDetails(props) {
    // console.log(props);
    const data = props.location.data;

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
            rating: data.rating,
          },
        });
      };

    return (
        <div>
            <Header />
            <h1>{data.title}</h1>
            <img src={data.image} alt="product" />
            <p>{data.desc}</p>

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default ProductDetails
