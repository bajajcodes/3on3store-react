import { Card } from "components";
import { getFilteredProducts, getProducts } from "./filters.helpers";
import { useEffect, useState } from "react";
import { useProducts } from "context";

function CardContainer() {
  const [products, setProducts] = useState([]);
  const { productsState } = useProducts();

  useEffect(async () => {
    const { products, exception } = await getProducts(); 
    const filteredProducts = getFilteredProducts(productsState, products);  
    setProducts(filteredProducts);
  }, [productsState]);

  return (
    <div className="products-cards-container">
      {products &&
        products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      {!products.length && (
        <h2
          style={{
            textAlign: "center",
            border: "5px groove var(--logo-color)",
          }}
        >
          Loading<span>...</span>
        </h2>
      )}
    </div>
  );
}

export { CardContainer };
