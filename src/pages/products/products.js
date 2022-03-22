import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import "./products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export { Products };
