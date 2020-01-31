import React, { useGlobal, useState, useEffect } from "reactn";
import StickersList from '../components/stickers/StickersList';
import NavBar from '../components/NavBar'
import { CartProvider } from "../components/cart/CartContext";
import {Cart} from "../components/cart/Cart"
const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      <CartProvider>
      < Cart />
      < StickersList />
      </CartProvider>
    </div>
  )
}

export default Home;