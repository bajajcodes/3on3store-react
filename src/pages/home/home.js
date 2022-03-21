import { Header, Footer } from "components/";
import { Main } from "./main/main";
import "./home.css";

function Home({logoImage, slides}) {
  return (
    <div className="home">
      <Header logoImage={logoImage}/>
      <Main slides={slides}/>
      <Footer logoImage={logoImage}/>
    </div>
  );
}

export { Home };
