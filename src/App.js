import { Home } from "pages";
import "styles/reset.css";
import "App.css";
import {data} from "data";

function App() {
  const {logoImage, slides} = data;
  return (
    <Home logoImage={logoImage} slides={slides} />
  );
}

export default App;
