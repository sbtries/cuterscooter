import { useEffect, useState, useGlobal } from 'reactn';
import StickersForm from './StickersForm';
import client from '../../api/client';
import React from "reactn";
import Sticker from './Sticker';
import "./StickersList.css";

const StickersList = () => {
  const [Stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStickers = async () => {
    setLoading(true);
    const { data } = await client.get("/stickers");
    setStickers(data);
    setLoading(false);
  }

  useEffect(() => {
    getStickers();
  }, []);

  return (
    <div className = "Stickers">
    <div className='Container'>

      <h2>Stickers</h2>
      {loading && (<div>Loading...</div>)}
      {!loading && (
        <>
          {!Stickers.length && (
            <div>No Stickers <span role="img" aria-label="sad face">😢</span></div>
          )}
          {Stickers.map((sticker) => (
            <Sticker 
              key={sticker._id} 
              getStickers={getStickers}
              sticker={sticker}
            />
          ))}
        </>
      )}
    </div>
    </div>
  )
}
// Same!
// module.exports = StickersList;
export default StickersList;