import { useState } from "react";
import "./imageslider.styles.css";

const sliderImages = [
  `${process.env.PUBLIC_URL}/images/Hangout-rafiki.svg`,
  `${process.env.PUBLIC_URL}/images/Workout-rafiki.svg`,
  `${process.env.PUBLIC_URL}/images/Ebook-pana.svg`
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);

  function slideRight() {
    setCurrent((current) => ++current);
    setCurrent(current => current === sliderImages.length ? 0 : current);
  }

  function slideLeft() {
    setCurrent((current) => --current);
    setCurrent((current) =>
      current <0 ? sliderImages.length - 1 : current
    );
  }

  function sliderClickHandler(){
      console.log("Image clicked");
  }

  return (
    <div className="images-container">
      <div id="arrow-left" className="arrow" onClick={() => slideLeft()}></div>

      {sliderImages.map((source, index) => (
        <div
          key={index}
          className="slide"
          onClick={() => sliderClickHandler()}
          style={{
            backgroundImage: `url(${source})`,
            display: `${index === current ? "block" : "none"}`,
          }}
        ></div>
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
