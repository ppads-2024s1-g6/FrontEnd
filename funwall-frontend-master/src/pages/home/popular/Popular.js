import React, { useState } from "react";
import { PopularCard } from "./PopularCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Popular = ({ items, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

  const settings = {
    dots: false, // Remover os pontos (dots)
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleAfterChange,
  };

  return (
    <>
      <section className="pupular"></section>
      <div className="container">
        <div className="header navbar">
          <h1>{title}</h1>
          <Link to="/">View All</Link>
        </div>
        <div className="content">
          <Slider {...settings}>
            {items.map((item) => (
              <PopularCard key={item.id} item={item} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
