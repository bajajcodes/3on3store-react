import { Card } from "components";
import {products} from "../dump";

function CardContainer() {
  return (
    <div className="cards-container">
      {products &&
        products.map((product, index) => (
          <Card product={product} productInCart={true} key={index} />
        ))}
    </div>
  );
}

export { CardContainer };
