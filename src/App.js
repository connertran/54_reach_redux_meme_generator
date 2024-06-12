import "./App.css";
import MemeForm from "./MemeForm";
import Meme from "./Meme";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

function App() {
  const memes = useSelector((store) => store.memes);
  const allMemes = memes.map((eachMeme) => (
    <Meme
      key={uuid()}
      id={eachMeme.id}
      topText={eachMeme.topText}
      bottomText={eachMeme.bottomText}
      imgURL={eachMeme.imgURL}
    />
  ));
  return (
    <div className="App">
      <header className="App-header">
        <MemeForm />
        <div>{allMemes}</div>
      </header>
    </div>
  );
}

export default App;
