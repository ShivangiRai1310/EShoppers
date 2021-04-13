import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="cyan" className="font-small darken-3 pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">EShoppers</h5>
            {/* <p>Happy Shopping!!</p> */}
            <p>
              EShoppers is an E-commerce portal to provide online shoppers with an interface
              to purchase products online from various merchants. The
              application will provide shoppers with various categories of
              products to choose from. <br></br> More products to be added in future development so stay tuned!!{" "}
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
            <ul className="list-unstyled">
              <p>
                <a href="#!">PROJECTS</a>
              </p>
              <p>
                <a href="#!">ABOUT US</a>
              </p>
              <p>
                <a href="#!">BLOG</a>
              </p>
              <p>
                <a href="#!">AWARDS</a>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
            <p>
              <i className="fa fa-home mr-3" /> UVCE, K.R. Circle, Banaglore,
              India
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow us</h5>
            <div className="mt-2 ">
              <a type="button" className="btn-floating btn-small btn-fb">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div className="mt-2 ">
              <a type="button" className="btn-floating btn-small btn-tw">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="mt-2 ">
              <a type="button" className="btn-floating btn-small btn-gplus">
                <i className="fab fa-google-plus" />
              </a>
              <div />
              <div className="mt-2 "></div>
              <a type="button" className="btn-floating btn-small btn-dribbble">
                <i className="fab fa-dribbble" />
              </a>
            </div>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com">EShoppers.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
