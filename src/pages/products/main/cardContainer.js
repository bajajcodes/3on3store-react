import { Card } from "components";
import { getFilteredProducts } from "./filters.helpers";
import axios from "axios";
import { useEffect , useState} from "react";
import { useProducts } from "context";

async function getProducts() {
  try {
    const response = await axios.get("/api/products");
    const products = await response.data.products;
    return products;
  } catch (exception) {
    console.error(exception);
  }
}

function CardContainer() {
  const [products, setProducts] = useState([]);
  const { productsState } = useProducts();
  // useEffect(async () => {
  //   const products = await getProducts();
  //   setProducts(getFilteredProducts(products, productsState));
  // }, []);

  useEffect(async () => {
    const products = await getProducts();
    setProducts(getFilteredProducts(products, productsState));
  }, [productsState])

  return (
    <div className="products-cards-container">
      {products &&
        products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
        {
          !products.length && <h2 style={{textAlign:"center", border:"5px groove var(--logo-color)"}}>Loading<span>...</span></h2>
        }
    </div>
  );
}

export { CardContainer };
