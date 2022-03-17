import { Header } from "./header/header.js";
import { Main } from "./main/main.js";
import { Footer } from "../../components/footer/footer.js";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export { Home };
