import React from "react";
import { useState } from "react";
import Filter from "./components/Filter";
import MovieRating from "./components/MovieRating";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: "Furiosa : Une saga Mad Max (2024)",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hbxqFdWXHeLIJfagMMhVG5SV5tb.jpg",
      Date: "23/05/2024",
      genre: "Action, Aventure",
      description:
        "Alors que le monde s'écroule, la jeune Furiosa tombe entre les mains d'une horde de motards dirigée par le seigneur de la guerre Dementus",
      trailer: "https://www.youtube.com/embed/MVndtQu6Iok?si=aoiTj-jqLxHGXm3q",
      rating: 4,
    },
    {
      id: 2,
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
    {
      id: 3,
      title: "Ultraman: Rising (2024)",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdXhPsr8hnbWsHa6XvQj6e4usz4.jpg",
      Date: "14/06/2024 ",
      genre: "Animation, Science-Fiction",
      description:
        "Tandis que Tokyo est assiégée par des monstres, la star du baseball Ken Sato rentre chez elle à contrecœur pour endosser le costume d'Ultraman. ",
      trailer: "https://www.youtube.com/embed/gmmDjPiN_mY?si=DkCbweNXJetBZvZL",
      rating: 3,
    },
    {
      id: 4,
      title: "Dr House (2004)",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6x1FKoU6NibBQB4hMRQYDMyDGQ7.jpg",
      Date: "2004 -04-20",
      genre: "Drame, Mystère",
      description:
        "Le docteur Gregory House, est un brillant médecin à tendance misanthrope qui dirige une équipe d'internistes au sein de l'hôpital fictif de Princeton-Plainsboro dans le New Jersey.",
      trailer: "https://www.youtube.com/embed/JRDPhY-GCUs?si=v3DROJlAzqz5iBEa",
      rating: 2,
    },
  ]);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/movie">
          <Route
            index
            element={
              <div className="min-h-screen flex flex-col justify-center items-center p-12 space-y-8">
                <Filter title={title} setTitle={setTitle} />
                <MovieRating rating={rating} setRating={setRating} />
                <MovieList
                  movieList={movieList}
                  title={title}
                  rating={rating}
                />
              </div>
            }
          />
          <Route path=":id" element={<MovieDetail movieList={movieList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
