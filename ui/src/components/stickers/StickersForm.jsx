import React, { useState, useGlobal } from "reactn";
import client from '../../api/client';
import "../../pages/form.css";
const StickersForm = (props) => {
  const { sticker } = props;

  const initialState = {
    name: sticker.name || '',
    price: sticker.price || ''
  };
console.log(sticker)
  const [formState, setFormState] = useState(initialState);

  const onSubmit = async (e) => {
    e.preventDefault();

    if(Object.keys(sticker).length > 0) {
      await client.patch("/stickers/" + sticker._id, formState);
    } else {
      await client.post("/stickers", formState);
      setFormState(initialState);
    }
    // Check if the onSubmit function was passed as a property
    // to this component, if so call it!
    // && typeof props.getStickers === "function" for full sanity-check
    if(props.getStickers) props.getStickers();

  }
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form">
      <div>
        <label>Sticker Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formState.price}
          onChange={handleChange} 
        />
        <div>
        <label>Image Path:</label>
        <input
          type="string"
          name="imagePath"
          value={formState.imagePath}
          onChange={handleChange} 
        />
        </div>
      </div>
      <div>
        <button>Submit</button>
      </div>
      </div>
    </form>
  )
}
StickersForm.defaultProps = {
  sticker: {},
}

export default StickersForm;