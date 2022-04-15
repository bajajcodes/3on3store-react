import { Header, Footer } from "components/index";
import { Alert } from "components";
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
      <Alert />
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export { Products };
