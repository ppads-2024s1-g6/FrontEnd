import React from "react";

export const PopularCard = ({ item: { cover, name } }) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="text">
          <h3>{name}</h3>
        </div>
      </div>
    </>
  );
};
