import { useParams } from "react-router-dom";
import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import "./products.css";
import { useProducts } from "context";
import { useEffect } from "react";

async function getQueriedCategoryProducts(category, productsDispatch) {
  if (category) {
    if (category === "intelligence") {
      productsDispatch({ type: "CATEGORY_INTELLIGENCE" });
    }

    if (category === "social skills") {
      productsDispatch({ type: "CATEGORY_SOCIAL_SKILLS" });
    }

    if (category === "strength") {
      productsDispatch({ type: "CATEGORY_STRENGTH" });
    }
  }
}

function Products() {
  const { productsDispatch } = useProducts();
  const { category } = useParams();
  useEffect(() => {
    getQueriedCategoryProducts(category, productsDispatch);
  }, []);

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
