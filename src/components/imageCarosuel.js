import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
    // autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="h-[400px] mt-56 w-full">
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            width={500}
            height={500}
            layout="responsive"
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
