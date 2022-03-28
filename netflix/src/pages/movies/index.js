import react, {useEffect} from "react";
import { useState } from "react";
import Movie from "../../components/Movie";
import MovieCard from "../../components/MovieCard";
import moviesSevices from "../../services/movies.sevices";

const Index = () => { 
  
  const [movies, setMovies] = useState();
    useEffect(()=> {
        moviesSevices.getMovies()
        .then((data)=>{
            console.log(data.results);
            setMovies(data.results);
        })
        .catch(err=>console.log(err))
    },[]);

return ( 
    <div className="movies__grid"> 
      <section className="movies__current__event">
        <h1 className="movies__current__event__title">Tendances actuelles</h1>
        <div className="movies__current__event__list">
          {movies &&
            movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} isActive={true}/>
            ))}
        </div>
      </section> 
    </div> 
  ); 
} ;
export default Index;