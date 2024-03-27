import { useState } from "react";
import { popular } from "../../mocks/dummyData";
import { MainCarousel } from "./components/homes/MainCarousel";
import { Popular } from "./popular/Popular";

export const HomePage = () => {
  const [items, setItems] = useState(popular);

  return (
    <>
      <MainCarousel />
      <Popular items={items} title="Popular Now" />
    </>
  );
};
