import react, {useEffect} from "react";
import { useState } from "react";
import MovieCard from "../../components/MovieCard";
import moviesSevices from "../../services/movies.sevices";

const Index = () => { 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var id=getRandomInt(50);// id=numéro de page qui corresponds à uns liste de films 
  console.log(id);
  const [films, setFilms] = useState();
    useEffect(()=> {
      moviesSevices.getPopularMovies(id+1)
      .then((data)=>{
          console.log(data.results);
          setFilms(data.results);
      })
      .catch(err=>console.log(err))
    },[]);

  const [movies, setMovies] = useState();
    useEffect(()=> {
        moviesSevices.getPopularMovies(id)
        .then((data)=>{
            console.log(data.results);
            setMovies(data.results);
        })
        .catch(err=>console.log(err))
    },[]);

  
// <Banner/>
return ( 
   <div>
     <script src="https://kit.fontawesome.com/10cf215a0d.js" crossOrigin="anonymous"></script>
      <div className="movies__section"> 
        <h2>NETFLIX ORIGINAL</h2>
        <div className="row"> 
          {movies &&
                movies.map((movie) => (
                  <MovieCard className="Movie__Card" movie={movie}/>
          ))}
        </div>
      </div> 
      <div className="movies__section"> 
        <h2>NETFLIX TENDANCES</h2>
        <div className="row"> 
          {films &&
                films.map((movie) => (
                  <MovieCard className="Movie__Card" movie={movie}/>
          ))}
        </div>
      </div> 
    </div>
  ); 
} ;
export default Index;

/*
<div className="movies__section"> 
        <h2>TENANCES ACTUELLES</h2>
        <div className="container"> 
        {films &&
              films.map((movie) => (
                <div className="movie__card">
                    <div className="card__img">
                      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
                    </div>
                    <div className="card__body">
                      <div className="card__title">{movie.title}</div>
                    </div>
                    <div className="card__footer" >
                      <div className="icon__play" onClick={() => {SetIsActive(!isActive); console.log(isActive)}}>
                        <span>Play</span>
                      </div>
                      <div className="icon__add">
                        <span>Add</span>
                      </div>
                      <div className="icon__down">
                        <span>Info</span>
                      </div>
                    </div>
                </div>
              ))}
        </div>
      </div>
*/