import { Card } from "flowbite-react";
import React from "react";

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <Card
      className="max-w-sm"
      imgAlt="movie card"
      imgSrc="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pDSOHzbOfM2vf5WCk4EY5Uo6IDM.jpg"
    >
      <a href="#!">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          King Kong X Godzilla (2024)
        </h5>
      </a>

      <div className="flex items-center justify-between">
        <a
          href="#!"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          See details
        </a>
      </div>
    </Card>
  );
};

export default MovieCard;
