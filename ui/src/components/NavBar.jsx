import React, { useGlobal } from "reactn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
// import NotFound from './pages/NotFound';
import Profile from "../pages/Profile";
import PrivateRoute from "../components/PrivateRoute";
import Login from "../pages/Login";
import Logout from "../components/users/Logout";
import SignUp from "../pages/SignUp";
import User from "../pages/User";
import "./NavBar.css";
import bluescoot from "../assets/bluescoot.png";

const NavBar = () => {
  const { 0: token } = useGlobal("token");
  const { 0: isAdmin } = useGlobal("isAdmin");

  return (
    <div className="NavBar container">
      <div class="scooter bg-static">
        <div class="bg-move"></div>

        <div className="scooter">
          <span>
            <h3>Cuter Scooter</h3>
            {/* <img src={bluescoot} alt="HELLO" height="42"/> */}
          </span>

          <span>
            <Link type="li" to="/" className="btn">
              Home
            </Link>
          </span>
          <span>
            <Link type="li" to="/contact" className="btn">
              Contact Us
            </Link>
          </span>
          {!token && (
            <>
              <span>
                <Link type="li" to="/login" className="btn">
                  Login
                </Link>
              </span>
              <span>
                <p>
                  {" "}
                  Log in to save stickers <br></br> in your cart
                </p>
              </span>
              <span>
                <Link type="li" to="/sign-up" className="btn">
                  Sign-up
                </Link>
              </span>
            </>
          )}
          {token && (
            <>
              <span>
                <Link type="li" to="/profile" className="btn">
                  Profile
                </Link>
              </span>
              <span>
                <Link type="li" className="btn">
                  <Logout className="btn" />
                </Link>
              </span>
            </>
          )}
          {isAdmin && (
            <>
              <span>
                <Link type="li" to="/admin" className="btn">
                  Add Sticker
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
