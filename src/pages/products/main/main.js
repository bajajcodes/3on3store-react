import { CardContainer } from "./cardContainer";

function Main({ products }) {
  return (
    <main className="main">
      <CardContainer products={products} />
    </main>
  );
}

export { Main };
