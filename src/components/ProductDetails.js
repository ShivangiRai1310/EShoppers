// import React from 'react';

// function ProductDetails(props) {
//     // console.log(props);
//     const p = props.location;
//     return (
//         <div>
//             <h1>{p.id}</h1>
//             <h1>{p.title}</h1>
//             <img src={p.image} alt="product" />
//             <p>{p.desc}</p>
//         </div>
//     )
// }

// export default ProductDetails

import React, { Fragment } from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import './Product';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

function ProductDetails({ id, title, price, image, rating, desc }) {

    //const p = props.location;

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating,
            },
        });
        };

  return (
    <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-left">
            Sony Bravia
          </h2>
          <p className="black-text h4-responsive mx-auto mb-5 w-175 text-left">
            108 cm (43 inches) Full HD Smart LED TV KDL-43W6603 (Black) (2020 Model)
          </p>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://images-na.ssl-images-amazon.com/images/I/71nGA2-XKEL._SL1500_.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon  className="pr-2" />
                      ₹ 24,679
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon className="pr-2" />
                    Rating
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Details:</a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae explicabo. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat.
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
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Features:</a>
              </h3>
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://cnet1.cbsistatic.com/img/u35SmB2zC8wrO4iCmNbcaqZR1wk=/1200x675/2020/02/11/ac9b33f3-543e-469b-b163-2ea159db2198/38-samsung-galaxy-s20-ultra.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Excellent Picture Quality
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className=" pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis
                        </a>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://www.gizbot.com/img/2017/06/top10smartphoneswithhigh-speed2-45ghzcpu-22-1498140668.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      High processing speed
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://i.gadgets360cdn.com/large/phones_with_best_battery_life_guide_cover_1601469124551.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Longer Battery Life
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Soluta nobis est eligendi optio cumque nihil impedit
                          quo minus
                        </a>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://miro.medium.com/max/2400/1*gt_oRTnpqVopiA6l2UPoFA.png"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Exceptional Camera Quality
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
                      {/* <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a> */}
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">More Such products:</a>
              </h3>
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://images-na.ssl-images-amazon.com/images/I/91Jjr4qmPfL._SL1500_.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Sony Bluetooth Speaker
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Sony SRS-XB23 Wireless Extra Bass Bluetooth Speaker with 12 Hours Battery Life (Red)
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
                    <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Mi Smart Band 
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Mi Smart Band 5-1.1” AMOLED Color Display, 2 Weeks Battery Life, 5ATM Water Resistant
                        </a>
                      </MDBCol>
                      <a href="#!">
                        <MDBIcon icon="angle-double-right" />
                      </a>
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
           </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default ProductDetails;