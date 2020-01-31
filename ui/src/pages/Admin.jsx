import React from "reactn";
import StickersForm from '../components/stickers/StickersForm';
import Sticker from '../components/stickers/Sticker';
import StickersList from '../components/stickers/StickersList';

const Admin = () => {
  return (
    <>
    <div><h3>Add Sticker:</h3></div>
    <StickersForm />
    {/* < StickersList /> */}
    </>
  )
}

export default Admin;