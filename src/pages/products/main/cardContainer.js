import { Card } from "components";
import { useProducts } from "context";

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
  const { filteredProducts } = useProducts();

  return (
    <div className="products-cards-container">
      {filteredProducts &&
        filteredProducts.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      {!filteredProducts.length && sastaLoader()}
    </div>
  );
}

export { CardContainer };
