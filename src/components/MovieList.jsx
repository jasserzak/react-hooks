import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { movieList, title, rating } = props;
  if (title === "" && rating === 0) {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {movieList
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
              movie.rating === rating
          )
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    );
  }
};

export default MovieList;
