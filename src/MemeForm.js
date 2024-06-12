import "./MemeForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
function MemeForm() {
  const dispatch = useDispatch();
  const initialState = {
    topText: "",
    bottomText: "",
    imgURL: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { topText, bottomText, imgURL } = formData;
    dispatch({
      type: "ADD",
      payload: { id: uuid(), topText, bottomText, imgURL },
    });
    setFormData(initialState);
  };
  return (
    <>
      <form className="MemeForm-form" onSubmit={handleSubmit}>
        <label htmlFor="topText">Top Text: </label>
        <input
          id="topText"
          type="text"
          name="topText"
          placeholder="Enter the top text for meme"
          value={formData.topText}
          onChange={handleChange}
          required
        />
        <label htmlFor="bottomText">Bottom Text: </label>
        <input
          id="bottomText"
          type="text"
          name="bottomText"
          placeholder="Enter the bottom text for meme"
          value={formData.bottomText}
          onChange={handleChange}
          required
        />
        <label htmlFor="imgURL">Image URL: </label>
        <input
          id="imgURL"
          type="text"
          name="imgURL"
          placeholder="Paste the image URL"
          value={formData.imgURL}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MemeForm;
