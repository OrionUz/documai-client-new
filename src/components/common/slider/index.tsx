import Slider from "react-slick";
import { LeftNarrowSvg, RightNarrowSvg } from "src/assets/svg";
import { CustomSliderProps } from "./type";

function CustomSlider({
  counts = 3,
  arrows = true,
  autoplay = false,

  children,
}: CustomSliderProps) {
  const settings = {
    speed: 500,
    arrows: arrows,
    infinite: true,
    autoplay: autoplay,
    slidesToShow: counts,
    initialSlide: 0,
    centerPadding: "0",

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
    nextArrow: <RightNarrowSvg className="slider_next" />,
    prevArrow: <LeftNarrowSvg className="slider_prev" />,
  };

  return (
    <Slider {...settings} className="custom-slider">
      {children}
    </Slider>
  );
}

export default CustomSlider;
