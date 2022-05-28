import { useState } from "react";

export function useSlides(inititalSlide, sliderImages) {
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

  return [current, slideRight, slideLeft];
}
