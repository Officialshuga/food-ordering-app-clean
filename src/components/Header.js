import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Slice/authSlice";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items); //get cart items from redux
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const Logo = new URL("../images/fooapplogo.jpg", import.meta.url);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Food Ordering App logo" />
      </div>

      <div className= {`nav-items ${
              isMenuOpen ? 'open' : ''
            }`} >
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="cart-icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="cart-count"> {totalItems}</span>
              )}
            </Link>
          </li>

          {isAuthenticated ? (
            <li >
              <button
                className="logout-button"
                onClick={() => {
                  dispatch(logout());
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="login-button" >
                Login{" "}
              </Link>
            </li>
          )}
        </ul>
      </div>
       {/* Toggle Icon */}
          {isMenuOpen ? (
            <MdClose
              className="toogle-icon"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <MdMenu
              className="toogle-icon"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
    </div>
  );
};

export default Header;
