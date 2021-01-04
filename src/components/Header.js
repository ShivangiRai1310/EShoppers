import React from "react";
import "./Header.css";
// import logo from "../media/logo2.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
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
    <div className="header">
      {/* LOGO */}
      <Link to="/">
        <img className="header-logo" src="https://firebasestorage.googleapis.com/v0/b/ecommerce-webapplication-d2a66.appspot.com/o/logo2.png?alt=media&token=5d891465-2a75-4fc8-b72c-d69c0b61ff89" alt="brand-logo" />
      </Link>

      {/* HEADER SEARCH BAR */}
      {/* <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div> */}

      {/* HEADER NAVBAR */}
      <div className="header-nav">

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="line-one">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="line-two">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="line-one">Returns</span>
            <span className="line-two">& Orders</span>
          </div>
        </Link>

        {/* <div className="header-option">
          <span className="line-one">Your</span>
          <span className="line-two">Prime</span>
        </div> */}

        <Link to="/checkout">
          <div className="header-option-basket">
            <ShoppingCartIcon />
            <span className="header-option-basketcount line-two"></span>
            {basket?.length}
          </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
