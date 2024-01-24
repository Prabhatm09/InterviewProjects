import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "/coffee.jpg",
    "/coffee0.png",
    "/coffee1.png",
    "/coffee3.jpg",
    "/coffee4.jpg",
    "/coffee5.png",
    "/coffee6.png",
    "/coffee7.png",
    "/coffee8.png",
    "/coffee9.png",
    "/coffee10.png",
    "/coffee11.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover h-[34em] w-full mt-[120px]"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
