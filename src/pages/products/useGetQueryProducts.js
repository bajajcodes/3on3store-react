import { useProducts } from "context";
import { useLocation } from "react-router-dom";

export function useGetQueryProducts() {
  const { productsDispatch } = useProducts();
  const location = useLocation();
  const { pathname } = location;
  async function getQueriedCategoryProducts() {
    const category = pathname.split("/")[2] ?? "";
    if (category) {
      if (category === "intelligence") {
        productsDispatch({ type: "CATEGORY_INTELLIGENCE" });
      }

      if (category === "social") {
        productsDispatch({ type: "CATEGORY_SOCIAL_SKILLS" });
      }

      if (category === "strength") {
        productsDispatch({ type: "CATEGORY_STRENGTH" });
      }
    }
  }

  return [getQueriedCategoryProducts];
}
