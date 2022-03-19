import { Header } from "../../components/header/header.js";
import { Main } from "./main/main.js";
import { Footer } from "../../components/footer/footer.js";
import "./home.css";

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
