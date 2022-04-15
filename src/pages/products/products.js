import { Header, Footer } from "components/index";
import { Aside } from "./aside/aside";
import { Main } from "./main/main";
import { useEffect } from "react";
import { useGetQueryProducts } from "./useGetQueryProducts";
import "./products.css";

function Products() {
  const [getQueriedCategoryProducts] = useGetQueryProducts();
  useEffect(() => {
    getQueriedCategoryProducts();
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
