import { Card } from "flowbite-react";
import React from "react";
import MovieRating from "./MovieRating";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <Card className="max-w-sm" imgAlt="movie card" imgSrc={movie.posterURL}>
      <a href="#!">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {movie.title}
        </h5>
      </a>
      <MovieRating rating={movie.rating} />
      <div className="flex items-center justify-between">
        <Link
          to={`/movie/${movie.id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          See details
        </Link>
      </div>
    </Card>
  );
};

export default MovieCard;
