import React, { useState, useEffect } from "react";
import "./CategoryDetails.css";
import Header from "./Header";
import Product from "./Product";
import { db } from "../firebase";
import Footer from './Footer';

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
      <h2 className='h1-responsive font-weight-bold text-center my-5 text-capitalize'>{cname}</h2>
      <p className='text-center w-responsive mx-auto mb-5'>
        Here's everything you might need from {cname}.
        <br /> Ask and you shall get!!
      </p>
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
      <Footer />
    </div>
  );
}

export default CategoryDetails;
