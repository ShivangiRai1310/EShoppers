import React, {Fragment} from 'react';
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import Header from "./Header";
import Footer from "./Footer";
//import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
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
            {/* <h1>{data.title}</h1>
            <img src={data.image} alt="product" />
            <p>{data.desc}</p>
            <button onClick={addToBasket}>Add to Basket</button> */}
            <MDBCard
              className="my-5 px-5 mx-auto"
              style={{ fontWeight: 300, maxWidth: "90%" }}
            >
              <MDBCardBody style={{ paddingTop: 0 }}>
                <h2 className="h1-responsive font-weight-bold my-5 text-center">
                  {data.title[0]}
                </h2>
                <p className="font-weight-bold mx-auto mb-5 w-75 text-center">
                  {data.title[1]}
                </p>
                <MDBRow>
                  <MDBCol md="12" lg="6">
                    <div className="mb-4">
                      <MDBView hover rounded className="z-depth-1-half mb-4">
                        <img
                          className="img-fluid"
                          src={data.image[0]}
                          alt=""
                        />
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
                      <div className="d-flex justify-content-between">
                        
                          <h6 className="mb-3">
                              <strong>₹ {data.price}</strong>
                          </h6>
                       
                        <p className="font-weight-bold dark-grey-text">
                          <div className="product-rating">
                          {Array(data.rating)
                            .fill()
                            .map((_, i) => (
                              <p>⭐</p>
                            ))}
                        </div>
                        </p>
                      </div>
                      <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                        <a href="#!">Description</a>
                      </h3>
                      <p className="mb-lg-0 mb-md-5 mb-4">
                        {data.desc}
                      </p>
                    </div>
                    <div className="mb-4">
                    <Fragment>
                        <MDBBtn onClick={addToBasket} color="primary">
                            ADD THIS TO CART
                        </MDBBtn>
                        <Link to="../">
                          <MDBBtn
                            color="secondary">
                          VIEW MORE PRODUCTS
                        </MDBBtn>    
                        </Link>
                    </Fragment>
              </div>

                  </MDBCol>
                  
                  
                  <MDBCol md="12" lg="6">
                    <div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                    <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                        <a href="#!">Description</a>
                      </h3>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                           <i class="fas fa-arrow-right"></i>  {data.features[0]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[1]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[2]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div><div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[3]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div><div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[4]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div><div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[5]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    <div style={{
                      borderBottom: "1px solid #e0e0e0",
                      marginBottom: "1.5rem"
                    }}>
                      <MDBRow>
                        <MDBCol md="9">
                          <p className="font-weight-bold dark-grey-text">
                            <i class="fas fa-arrow-right"></i>  {data.features[6]}
                          </p>
                        </MDBCol>
                      </MDBRow>
                    </div>


                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

         <Footer />
        </div>
    )
}

export default ProductDetails
