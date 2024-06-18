import React from "react";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieRating from "./components/MovieRating";
import MovieList from "./components/MovieList";

const App = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: "King Kong X Godzilla",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pDSOHzbOfM2vf5WCk4EY5Uo6IDM.jpg",
      Date: "2024 -03-29",
      genre: "Action",
      description:
        "Le surpuissant Kong et le redoutable Godzilla sont opposés à une force colossale terrée dans notre monde, qui menace leur existence et la nôtre. Godzilla x Kong : Le nouvel empire approfondit l'histoire de ces titans et leurs origines, ainsi que les mystères de Skull Island et au-delà, tout en levant le voile sur la bataille mythique qui a forgé ces êtres extraordinaires et les a liés à l'humanité à jamais.",
      trailer: "https://www.youtube.com/embed/A_bERKuGCJM?si=t8wt0b_Qp--3smRn",
      rating: 4,
    },
  ]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-12 space-y-8">
      <Filter title={title} setTitle={setTitle} />
      <MovieRating rating={rating} setRating={setRating} />
      <MovieList movieList={movieList} title={title} rating={rating} />
    </div>
  );
};

export default App;
