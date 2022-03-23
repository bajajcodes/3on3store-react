import { useState } from "react";
import { Link } from "react-router-dom";
import "./imageslider.styles.css";
import { slides } from "data";


function ImageSlider() {
  const { sliderImages, inititalSlide } = slides;
  const [current, setCurrent] = useState(inititalSlide);

  function evaluateRightSlide(rightSlideCount) {
    return rightSlideCount === sliderImages.length ? 0 : rightSlideCount;
  }

  function evaluateLeftSlide(leftSlideCount) {
    return leftSlideCount < 0 ? sliderImages.length - 1 : leftSlideCount;
  }

  function slideRight() {
    setCurrent((current) => evaluateRightSlide(current + 1));
  }

  function slideLeft() {
    setCurrent((current) => evaluateLeftSlide(current - 1));
  }

  return (
    <div className="images-container">
      <div id="arrow-left" className="arrow" onClick={() => slideLeft()}></div>

      {sliderImages.map(({source, category}, index) => (
        <Link to={`/products/${category}`} key={index}>
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
