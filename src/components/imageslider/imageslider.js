import { useState } from "react";
import { Link } from "react-router-dom";
import "./imageslider.styles.css";

function ImageSlider({ sliderImages, inititalSlide }) {
  const [current, setCurrent] = useState(inititalSlide);

  function slideRight() {
    setCurrent((current) => ++current);
    setCurrent((current) => (current === sliderImages.length ? 0 : current));
  }

  function slideLeft() {
    setCurrent((current) => --current);
    setCurrent((current) => (current < 0 ? sliderImages.length - 1 : current));
  }

  return (
    <div className="images-container">
      <div id="arrow-left" className="arrow" onClick={() => slideLeft()}></div>

      {sliderImages.map((source, index) => (
        <Link to="/products"  key={index}>
          <div
            className="slide"
            style={{
              backgroundImage: `url(${source})`,
              display: `${index === current ? "block" : "none"}`,
            }}
          ></div>
        </Link>
      ))}
      <div
        id="arrow-right"
        className="arrow"
        onClick={() => slideRight()}
      ></div>
    </div>
  );
}

export { ImageSlider };
