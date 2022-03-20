import { useState } from "react";
import "./starRating.css";

function Star({ marked, starId, starColor }) {
  return (
    <span
      data-star-id={starId}
      className="star"
      role="button"
      style={{ color: starColor }}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

function StarRating({ starColor }) {
  const [selection, setSelection] = useState(1);

  function hoverOver(event) {
    if (event && event.target && event.target.getAttribute("data-star-id")) {
      let val = parseInt(event.target.getAttribute("data-star-id"), 10);
      setSelection(val);
    }
  }

  return (
    <div onMouseOut={() => hoverOver(null)} onMouseOver={hoverOver}>
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : 0}
          starColor={starColor}
        />
      ))}
    </div>
  );
}

export { StarRating };
