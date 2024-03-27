import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

export const HomeCard = ({
  item: { cover, name, rating, time, desc, starring, genres, tags },
}) => {
  return (
    <div className="box">
      <div className="coverImage">
        <img src={cover} alt="" />
      </div>
      <div className="content flex">
        <div className="details row">
          <h1>{name}</h1>
          <div className="rating flex">
            <div className="rate">
              <i>
                {" "}
                <BsFillStarFill className="star" />
              </i>
              <i>
                <BsFillStarFill className="star" />
              </i>
              <i>
                <BsStarHalf className="star-half" />
              </i>
            </div>
            <label>{rating}</label>
            <label>{time}</label>
          </div>
          <p className="desc">{desc}</p>
          <div className="cast">
            <h4>
              <span>Starring:</span>
              {starring}
            </h4>
            <h4>
              <span>Genres:</span>
              {genres}
            </h4>
            <h4>
              <span>Tags:</span>
              {tags}
            </h4>
          </div>
          <button className="primary-btn"> Veja Mais</button>
        </div>
      </div>
    </div>
  );
};
