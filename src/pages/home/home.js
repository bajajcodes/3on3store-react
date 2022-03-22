import { Header, Footer } from "components/";
import { Main } from "./main/main";
import "./home.styles.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { Home };
