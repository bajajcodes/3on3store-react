import { Card, Loader } from "components";
import { useProducts } from "context";
import { useSearchFeature } from "./useSearchFeature";


function CardContainer() {
  const [getSearchedProducts] = useSearchFeature();
  const { filteredProducts } = useProducts();
  const products = getSearchedProducts(filteredProducts);


  return (
    <div className="products-cards-container">
      {products.length > 0 && <Loader /> &&
        products.map((product) => <Card product={product} key={product._id} />)}
      {products.length <= 0 && <Loader display="flex" message="Products" />}
    </div>
  );
}

export { CardContainer };
