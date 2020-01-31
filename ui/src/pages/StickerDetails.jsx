import React, { useState, useEffect, useGlobal } from "reactn";
import client from "../api/client";
import { useParams } from "react-router-dom";

const StickerDetails = () => {
  const [thisSticker, setThisSticker] = useState('');
  const { 0: token } = useGlobal("token");
  
  const { stickerID } = useParams();


  useEffect(() => {
    const getSticker = async () => {
      const { data } = await client.get("/stickers/" + stickerID);

      setThisSticker(data);
    }
    getSticker();
  }, []);

    if(thisSticker) {
      return(
      <div>
        <h1>Sticker:</h1>
              <em>{thisSticker.name}</em>  
      </div>
    );
  } else{
    return <em>Sticker not found....</em>
  }
  };

  export default StickerDetails;