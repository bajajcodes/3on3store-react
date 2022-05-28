import { Card } from "components";
import { useCartContext } from "context";

function CardContainer() {
  const { cartState } = useCartContext();
  const { cart } = cartState;

  return (
    <div
      className="cards-container"
      style={{ overflowY: cart.length > 1 ? "scroll" : "hidden" }}
    >
      {cart &&
        cart.map((product) => <Card product={product} key={product._id} />)}
    </div>
  );
}

export { CardContainer };
