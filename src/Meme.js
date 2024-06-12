import "./Meme.css";
import { useDispatch } from "react-redux";
function Meme({ id, topText, bottomText, imgURL }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: { id } });
  };
  return (
    <div className="Meme-div">
      <p>{topText}</p>
      <img src={imgURL} alt="meme-img" />
      <p>{bottomText}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Meme;
