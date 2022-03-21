import { CardContainer } from "./cardContainer";

function Main({products}) {
  return (
    <main className="main">
              <h2 className="text-xl content-title">My Cart</h2>

      <CardContainer  products={products}/>
    </main>
  );
}

export { Main };
