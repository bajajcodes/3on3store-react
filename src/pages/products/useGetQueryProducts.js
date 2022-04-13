import { useProducts } from "context";
import { useParams } from "react-router-dom";

export function useGetQueryProducts() {
  const { productsDispatch } = useProducts();
  const { category } = useParams();

  async function getQueriedCategoryProducts() {

    if (category) {
      if (category === "intelligence") {
        productsDispatch({ type: "CATEGORY_INTELLIGENCE" });
      }

      if (category === "social skills") {
        productsDispatch({ type: "CATEGORY_SOCIAL_SKILLS" });
      }

      if (category === "strength") {
        productsDispatch({ type: "CATEGORY_STRENGTH" });
      }
    }
  }

  return [getQueriedCategoryProducts];
}
