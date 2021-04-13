import React from "react";
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Our Popular Categories
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          With the endless amount of products we bring for you, we have made this list of the popular categories 
          so that you can find the products you need, without hustling much. With the brief description about 
          each category, you can be sure where to find your favourite products!!!
          <br />
                Ask and you shall get!!
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Fgadgets1.jpg?alt=media&token=4beca957-1218-491f-a12a-45f9f5c0fa43"
                alt="electronics category"
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Electronic Gadgets</h4>
              <p>
                A place where you can find all your smart gadgets. All the electronic items that you might ever seek; be it your 
                smartphones, smart tv, smart watches or basic electronic items like your headphones. 
              </p>
              <Link to="/category-details/electronics">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Fappliances.jpg?alt=media&token=060f0005-ee9d-40b6-808c-381bcae7f591"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Electrical Appliances</h4>
              <p>
                An awesome collection of all your home and office Appliances. Find each and every electrical item you
                  might ever want for your beautiful home and office.
                  <br />
                  We have got you covered!!
              </p>
              <Link to="/category-details/appliances">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Fstationary.jpg?alt=media&token=c9740bfc-13d1-4aa6-8035-4bdc99c0879c"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Stationary</h4>
              <p>
                Running out of office or school/college Stationary items? 
                <br /> 
                View our largest collection of Stationary products!
              </p>
              <Link to="/category-details/stationary">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Ffashion.jpg?alt=media&token=7cce70be-c2dc-4e48-aaf9-8f09b1307008"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Fashion</h4>
              <p>
                Who doesn't want to keep up with the latest fashion?! 
                 Discover all the never ending choices of clothes, footwear and accessories we have to offer!!
              </p>
              <Link to="/category-details/fashion">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
              </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Ffurniture.webp?alt=media&token=2ad60362-b5e0-4d0e-9368-4b8ec1f681e8"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Furniture</h4>
              <p>
                Furniture is kinda the soul of the place.
                <br /> Buy the best furniture for from us for all your indoor and outdoor needs!
              </p>
              <Link to="/category-details/furniture">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCol><MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/Categories%2Fgrocery.jpg?alt=media&token=b1256785-74c0-418d-a58c-9bea432fb283"
                alt=""
                className="img-fluid"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold mb-3">Grocery</h4>
              <p>
               Get fresh grocery items, at a very reasonable price...
               <br /> It's as if you have handpicked everything yourself!!
              </p>
              <Link to="/category-details/grocery">
                <MDBBtn color="success" rounded>
                  View Products
                </MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default Categories;
