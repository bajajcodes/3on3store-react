import { Card } from "components";
import { useProducts } from "context";
import { useSearchFeature } from "./useSearchFeature";

function sastaLoader() {
  return (
    <h2
      style={{
        textAlign: "center",
        border: "5px groove var(--logo-color)",
      }}
    >
      Loading<span>...</span>
    </h2>
  );
}

function CardContainer() {
  const [getSearchedProducts] = useSearchFeature();
  const { filteredProducts } = useProducts();
  const products = getSearchedProducts(filteredProducts);

  return (
    <div className="products-cards-container">
      {products &&
        products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      {!products.length && sastaLoader()}
    </div>
  );
}

export { CardContainer };
