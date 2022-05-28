import { Link } from "react-router-dom";
import "./imageslider.styles.css";
import { slides } from "data";
import { useSlides } from "./useSlides";

function ImageSlider() {
  const { sliderImages, inititalSlide } = slides;
  const [current, slideRight, slideLeft] = useSlides(inititalSlide, sliderImages);

  return (
    <div className="images-container">
      <div id="arrow-left" className="arrow" onClick={() => slideLeft()}></div>

      {sliderImages.map(({ source, category }, index) => (
        <Link to={`/category/${category}`} key={index}>
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
