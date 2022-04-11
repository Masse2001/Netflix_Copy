import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import Filter from "../../components/Filter";

const Index = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1";
const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);
useEffect(() => {
    fetchPopular();
  }, []);
const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };
return (
    <div className="App">
      <h1>Movies</h1>
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default Index;