import { Header, Footer } from "components/index";
import { Main } from "./main/main";
import "pages/products/products.css";
import "./wishlist.css";
function Wishlist() {
  return (
    <div className="wishlist products-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export { Wishlist };
