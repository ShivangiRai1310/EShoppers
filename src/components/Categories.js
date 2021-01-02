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
                src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg"
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
                src="https://media.istockphoto.com/photos/home-appliances-set-of-household-kitchen-technics-isolated-on-white-pi
                     cture-id940975636?k=6&m=940975636&s=612x612&w=0&h=mqGbPUDhI_nrMyHCtaLqYTdu71hdBpvaPLu5PD14LZ4="
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
<<<<<<< HEAD
                src="https://deomnitech.com/deo/wp-content/uploads/2017/12/office-tools-and-supplies.jpg"
=======
                src="https://financialtribune.com/sites/default/files/field/image/17january/11_ns_stationery_210-ed_2.jpg?__cf_chl_jschl_tk__=89b1e9d93f5227e85a095f4975fcd51db0b03c40-1609364872-0-AcPOHgsuLj6_cz5E5Hv_RX6pzqE1vXT_F9_FleqvoE3UIl6Hthn711bP_0wTis1-jcjxEPGiF4wpATYmDc4kV_n4Gx9n8Qmtm6xGzzNKiA68o_BYWtn5Fl4a0TJMoOCehxPvOSssn-SQm5gj0jyZ6r8Ln6J7yaa_aLn65UcrQVcLdMuAW4dfzn8UcbC7Vwjm8iXy1gIjMwGSYf9_r1xzGkCZ2323tZcTXxLgUSPi1S1-F56Pzwf5tevOBxL0vuw7R8hY3Y6-aV6hCUe-gtwxXFIgO1uuUVyIpbKJ_tq4y8qEIDuCxLqgc5G9PlPPtwhq5ennVOWtmzDz0Y21IY2-Ilb-Z3JpCtpqnRKnBTSLis5tNMDnnmdIpoc_ykjHqX9BI1Vq-y3pzQhvS6SX5Ol8g90"
>>>>>>> e630e6336e80c836f7004de71d89062a6e570d48
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
                src="https://cmsimages.tribuneindia.com/gallary_content/2020/12/2020_12$largeimg_273492537.jpg"
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
                src="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/LORDS_3_SEATER_SOFA_PVC_WALNUTBROWN_900x.png?v=1571465777"
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
                src="https://www.ermiaresorts.com/Uploads/Photos/grocery.jpg"
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