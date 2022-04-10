import { Card } from "components";
import { useCartContext } from "context";

function CardContainer() {
  const { cartState } = useCartContext();
  const { cart, getCartSummary } = cartState;
  const { numberOfProductsInCart } = getCartSummary(cart);

  return (
    <div
      className="cards-container"
      style={{ overflowY: cart.length > 1 ? "scroll" : "hidden" }}
    >
      {cart &&
        cart.map((product, index) => <Card product={product} key={index} />)}
    </div>
  );
}

export { CardContainer };
