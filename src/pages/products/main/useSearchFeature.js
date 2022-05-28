import { useSearchParams } from "react-router-dom";

export function useSearchFeature() {
  let [searchParams] = useSearchParams();

  function getSearchedProducts(products) {
    return products.filter((product) => {
      let filter = searchParams.get("filter");
      if (!filter)
        return true;
      let title = product.title.toLowerCase();
      return title.startsWith(filter.toLowerCase());
    });
  }

  return [getSearchedProducts];
}
