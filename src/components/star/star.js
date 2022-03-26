import "./star.styles.css";

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

  export {Star};