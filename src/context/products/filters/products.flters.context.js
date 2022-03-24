import { createContext, useContext, useReducer } from "react";
import {
  productsReducer,
  defaultFiltersState,
} from "./products.filters.reducer";

const ProductsContext = createContext(null);

function ProductProvider({ children }) {
  const [productsState, productsDispatch] = useReducer(productsReducer, {...defaultFiltersState});
  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  return useContext(ProductsContext);
}

export { ProductProvider, useProducts };
