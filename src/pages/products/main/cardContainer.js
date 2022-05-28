import { Card, Loader } from "components";
import { useProducts } from "context";
import { useSearchFeature } from "./useSearchFeature";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CardContainer() {
  const [getSearchedProducts] = useSearchFeature();
  const { filteredProducts, productsDispatch } = useProducts();
  const products = getSearchedProducts(filteredProducts);
  const location = useLocation();

  useEffect(() => {
    return () => productsDispatch({ type: "CLEAR_ALL_FILTERS" });
  }, [location.pathname]);

  return (
    <div className="products-cards-container">
      {products.length > 0 && <Loader /> &&
        products.map((product) => <Card product={product} key={product._id} />)}
      {products.length < 1 && filteredProducts.length < 1 && (
        <Loader display="flex" message="Products" />
      )}
      {products.length < 1 && filteredProducts.length > 1 && (
        <h1>No Videos Found</h1>
      )}
    </div>
  );
}

export { CardContainer };
