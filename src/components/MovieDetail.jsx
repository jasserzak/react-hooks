import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = (props) => {
  const { movieList } = props;
  const { id } = useParams();

  const navigate = useNavigate();

  const movie = movieList.find((el) => el.id === +id);
  return (
    <div>
      <h1>{movie.title}</h1>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <button onClick={() => navigate("/movie")}>Go Back</button>
    </div>
  );
};

export default MovieDetail;
