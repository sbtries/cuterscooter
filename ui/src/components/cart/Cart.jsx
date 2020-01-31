import React, { useContext } from 'reactn';
import { CartContext } from './CartContext';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  console.log(cart)

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name")
    setCart(cart.filter(item => item.name !== name));
  };

  return (
    <>
      <div>

        {cart.map((item) => (
          <tr>
            <td><b>Name:</b> {item.name}</td> <td> <b>Price: </b>${item.price / 100} <button name={item.name} onClick={handleRemoveItem}>X</button> </td>
          </tr>
        ))}
        <tr><td><b>items in cart </b>: </td> <td>{cart.length}</td></tr>
        <br />
        <tr><td><b>total price :</b></td> <td>$ {totalPrice / 100}</td></tr>
        <Link type="li" to="/checkout">
          Checkout              
        </Link>
      </div>
    </>
  )
}