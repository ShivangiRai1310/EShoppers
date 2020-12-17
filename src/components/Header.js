import React from "react";
import "./Header.css";
import logo from "../media/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if(user){
      auth.signOut();
    }

  }

  return (
    <div className="header">
      {/* LOGO */}
      <img className="header-logo" src={logo} alt="brand-logo" />

      {/* HEADER SEARCH BAR */}
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      {/* HEADER NAVBAR */}
      <div className="header-nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="line-one">Hello {!user ? "Guest" : user.email}</span>
            <span className="line-two">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="line-one">Returns</span>
          <span className="line-two">& Orders</span>
        </div>
        <div className="header-option">
          <span className="line-one">Your</span>
          <span className="line-two">Prime</span>
        </div>

        <div className="header-option-basket">
          <ShoppingCartIcon />
          <span className="header-option-basketcount line-two">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
