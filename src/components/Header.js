// import React from "react";
// import "./Header.css";
import logo from "../media/logo.png";
// import SearchIcon from "@material-ui/icons/Search";
 import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

// function Header() {


//   return (
//     <div className="header">
//       {/* LOGO */}


//       {/* HEADER SEARCH BAR */}
//       <div className="header-search">
//         <input className="header-search-input" type="text" />
//         <SearchIcon className="header-search-icon" />
//       </div>
//       {/* HEADER NAVBAR */}
//       <div className="header-nav">

        // <Link to={!user && "/login"}>
        //   <div onClick={handleAuthentication} className="header-option">
        //     <span className="line-one">
        //       Hello {!user ? "Guest" : user.email}
        //     </span>
        //     <span className="line-two">{user ? "Sign Out" : "Sign In"}</span>
        //   </div>
        // </Link>

//         <Link to="/orders">
//           <div className="header-option">
//             <span className="line-one">Returns</span>
//             <span className="line-two">& Orders</span>
//           </div>
//         </Link>

//         <div className="header-option">
//           <span className="line-one">Your</span>
//           <span className="line-two">Prime</span>
//         </div>

        
        
//       </div>
//     </div>
//   );
// }

// export default Header;





import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";



function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>
          {/* <strong className="white-text">Navbar</strong> */}
            <Link to="/">
             <img className="header-logo" src={logo} alt="brand-logo" style={{width:"150px", objectFit:"contain", margin:"0 30px"}} />
            </Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/orders">Your Orders</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/checkout">
              {/* <Link to="/checkout"> */}
                {/* <div className="header-option-basket"> */}
                  <ShoppingCartIcon />
                  {/* <span className="header-option-basketcount line-two"></span> */}
                  {basket?.length}
                {/* </div> */}
              {/* </Link> */}
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown onClick={handleAuthentication}>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem>Hello {!user ? "Guest" : user.email}</MDBDropdownItem>
                  <MDBDropdownItem onClick={handleAuthentication}>
                    <Link to={!user && "/login"}>
                      {user ? "Sign Out" : "Sign In"}
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem href="/userProfile"> My profile</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }


export default Header;