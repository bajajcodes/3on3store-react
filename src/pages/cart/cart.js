import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import "../products/products.css";
import "./cart.styles.css";

function Cart() {
  return (
    <div className="products-wrapper">
      <Header/>
      <Aside />
      <Main/>
      <Footer/>
    </div>
  );
}

export { Cart };
