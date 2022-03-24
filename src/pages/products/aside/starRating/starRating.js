import { Star } from "components";
import { useProducts } from "context";

function StarRating({ starColor }) {
  const {productsState, productsDispatch} = useProducts();
  const { rating } = productsState;

  function hoverOver(event) {
    if (event && event.target && event.target.getAttribute("data-star-id")) {
      const val = parseInt(event.target.getAttribute("data-star-id"), 10);
      productsDispatch({ type: "RATING", rating: val });
    }
  }

  return (
    <div onMouseOut={() => hoverOver(null)} onMouseOver={hoverOver}>
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={rating ? rating >= i + 1 : 0}
          starColor={starColor}
        />
      ))}
    </div>
  );
}

export { StarRating };
