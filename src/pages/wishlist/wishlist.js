import { Header, Footer } from "components/index";
import {Main} from "./main/main";
import { products } from "./dump";
import "pages/products/products.css";
import "./wishlist.css";


function Wishlist({logoImage}) {
    return (
      <div className="products-wrapper">
        <Header logoImage={logoImage} />
        <Main products={products} />
        <Footer logoImage={logoImage} />
      </div>
    );
  }
  
  export { Wishlist };