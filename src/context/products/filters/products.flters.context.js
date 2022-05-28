import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import {
  productsReducer,
  defaultFiltersState,
} from "./products.filters.reducer";
import {
  getProducts,
  getProduct,
  getFilteredProducts,
} from "./filters.helpers";

const ProductsContext = createContext(null);

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    defaultFiltersState
  );

  useEffect(async () => {
    const { products, exception } = await getProducts();
    setProducts(products);
  }, []);

  const filteredProducts = getFilteredProducts(productsState, products);

  return (
    <ProductsContext.Provider
      value={{ productsState, productsDispatch, filteredProducts, getProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductProvider, useProducts };
