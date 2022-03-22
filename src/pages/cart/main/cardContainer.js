import { Card } from "components";

function CardContainer({ products }) {
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
