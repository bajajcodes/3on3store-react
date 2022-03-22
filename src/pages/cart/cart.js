import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import { products } from "./dump";
import "../products/products.css";
import "./cart.styles.css";

function Cart({ logoImage }) {
  return (
    <div className="products-wrapper">
      <Header logoImage={logoImage} />
      <Aside />
      <Main products={products} />
      <Footer logoImage={logoImage} />
    </div>
  );
}

export { Cart };
