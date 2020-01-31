import React, { useGlobal } from "reactn";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
// import NotFound from './pages/NotFound';
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Login from "./pages/Login";
import Logout from './components/users/Logout';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Admin from './pages/Admin';
import StickerDetails from './pages/StickerDetails';
import StickersList from './components/stickers/StickersList'
import "./App.css";
import { CartProvider } from "./components/cart/CartContext";
import Checkout from "./pages/Checkout";
import ContactForm from "./pages/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/user/:userId" component={User} />
      <Route path="/stickers" component={StickersList} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/contact" component={ContactForm
      } />


      <Route path="/stickers/:stickerId" component={StickerDetails} />

      <AdminRoute path="/admin" exact component={Admin} />
      <PrivateRoute path="/profile" component={Profile} />

      {/* <Route component={NotFound} /> */}
    </Router>
  );
}

export default App;


