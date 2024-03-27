import { useState } from "react";
import { homeData } from "../../../../mocks/dummyData";
import { Carousel } from "./Carousel";
import "./home.css";

export const MainCarousel = () => {
  const [items, setItems] = useState(homeData);
  return (
    <>
      <section className="home">
        <Carousel items={items} />
      </section>
      <div className="margin"></div>
    </>
  );
};
