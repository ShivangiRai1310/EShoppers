import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn } from 'mdbreact';

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
    
      <section className='text-center my-5'>
          <MDBRow>
            <MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
              <MDBCard wide ecommerce>
                <MDBCardImage
                  className="product-image"
                  // cascade
                  src={data.image}
                  // top
                  alt='product'
                />
                <MDBCardBody cascade className='text-center'>
                  <MDBCardTitle>
                      <p>{data.title[0]}</p>
                  </MDBCardTitle>
                  <MDBCardText>{data.title[1]}</MDBCardText>
                  <MDBCardFooter className='px-1'>
                    <span className='float-left font-weight-bold'>
                      <strong>₹{data.price}</strong>
                    </span>
                    <span className='float-right'>
                      {/* <MDBTooltip domElement placement='top'> */}
                        <div className="product-rating">
                        {console.log(data.rating)}
                        {Array(Math.floor(data.rating)).fill(<p>⭐</p>)}
                        </div>
                      {/* </MDBTooltip> */}
                      {/* <MDBTooltip domElement placement='top'>
                        <i className='grey-text fa fa-shopping-cart' />
                        <span>Add to cart</span>
                      </MDBTooltip> */}
                    </span>
                    <span className='float-left'>
                      <MDBBtn onClick={addToBasket} color="primary">Add to basket</MDBBtn>
                    </span>
                    <span className='float-right'>
                      <Link to={newTo}>
                        <MDBBtn color="secondary">View</MDBBtn>
                      </Link> 
                    </span>                    
                  </MDBCardFooter>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        {/* <div className="product-info">
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
        <Link to={newTo}><button>More Details</button></Link> */}
      </section>
  );
}

export default Product;
