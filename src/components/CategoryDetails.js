import React, { useState, useEffect } from "react";
import "./CategoryDetails.css";
import Header from "./Header";
import Product from "./Product";
import { db } from "../firebase";

function CategoryDetails(props) {
  //console.log(props);
  const cname = props.match.params.name;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("category", "==", cname)
      .onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  //   console.log(products[0].data.title);

  return (
    <div>
      <Header />
      <h1>{cname}</h1>

      <div className="home-container">
        {products?.map((product) => (
          <div className="home-row">
            <Product
              id={product.id}
              data={product.data}
            />
          </div>
        ))}

      </div>
    </div>
  );
}

export default CategoryDetails;
