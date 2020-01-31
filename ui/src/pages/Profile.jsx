import React, { useState, useEffect, useGlobal } from "reactn";
import client from "../api/client";
import {Cart} from "../components/cart/Cart"
import { CartProvider } from "../components/cart/CartContext";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { 0: token } = useGlobal("token");

  useEffect(() => {
    const getProfile = async () => {
      const { data } = await client.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setProfile(data);
    }
    getProfile();
  }, [token]);

  return (
    <CartProvider>
    <div>
      <h1>Profile:</h1>
      {profile && (
        <div>
          <div>
            <em>{profile.email}</em>
            <em>{profile.token}</em>

            <h1>{profile.admin}</h1>

          </div>
        </div>
      )}
      <Cart />

    </div>
    </CartProvider>
  )
}

export default Profile;