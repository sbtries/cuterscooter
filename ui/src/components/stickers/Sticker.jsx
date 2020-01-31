import React, { useState, useGlobal, useContext } from "reactn";
import client from '../../api/client';
import { Link } from "react-router-dom";
import "./Sticker.css"
import {CartContext} from '../cart/CartContext'

const Sticker = (props) => {
  const { sticker } = props;
  const { 0: isAdmin } = useGlobal("isAdmin")
  const [cart, setCart] = useContext(CartContext);


  const deleteSticker = async () => {
    const response = await client.delete(`/stickers/${sticker._id}`);

    if (props.onDelete) props.onDelete(response.data);
  }

    const addCart = () => {
    const sticker = { name: props.sticker.name, price: props.sticker.price};
    setCart(currentState => [...currentState, sticker]);
    console.log(cart)
  }

  // OBJECT NOT ITERABLE??
  //   const [cart, setCart] = useGlobal('cart');
  //   const addCart = (e) => {
  //     e.preventDefault();

  //     setCart([...cart, {
  //       sticker,
  //       id: cart.length
  //     }]);
  //   }

  return (
    <div className="Sticker">
        <div>Name: {sticker.name}</div>
        <div>Price: ${sticker.price / 100}</div>
        <div> <img src={sticker.imagePath} alt="Sticker Image" /></div>
        <div>Price: ${sticker.price / 100}</div>
      <button onClick={addCart} >Add to Cart</button>

      {isAdmin && (
          <>
        <button className="Sticker__delete" onClick={deleteSticker}>X</button>
          </>
        )}
    </div>
  );
}

export default Sticker;