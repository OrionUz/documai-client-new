import Slider from "react-slick";
import { LeftNarrowSvg, RightNarrowSvg } from "src/assets/svg";
import { CustomSliderProps } from "./type";

function CustomSlider({
  counts = 3,
  arrows = true,
  dots = false,
  autoplay = false,
  initialSlide = 0,
  children,
}: CustomSliderProps) {
  console.log(dots);

  const settings = {
    speed: 500,
    arrows: arrows,
    dots: dots,
    infinite: true,
    autoplay: autoplay,
    slidesToShow: counts,
    initialSlide: initialSlide,
    // slidesToScroll: 1,
    centerPadding: "0",

    responsive: [
      {
        breakpoint: 1750,
        settings: {
          slidesToShow: counts === 5 ? 4 : counts,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
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
