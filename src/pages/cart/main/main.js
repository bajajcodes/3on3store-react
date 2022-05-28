import { CardContainer } from "./cardContainer";
import { useCartContext } from "context";
import {LinkButton} from "components";


function Main() {
  const { cartState } = useCartContext();
  const { cart, getCartSummary } = cartState;
  const { numberOfProductsInCart } = getCartSummary(cart);
  return (
    <main className="main">
      <h2 className="text-xl content-title">
        {numberOfProductsInCart
          ? `My Cart (${numberOfProductsInCart})`
          : `Your Cart is empty 😦`}
      </h2>
      {
        numberOfProductsInCart === 0 && <LinkButton to="/products" text="Get Products" />
      }
      <CardContainer />
    </main>
  );
}

export { Main };
