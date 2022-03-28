import react, {useEffect} from "react";

const Movie = (props) => { 
  return ( 
    <div className="movie__card">
        <div className="movie__img">
            <img src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path} />
        </div>
        <div className="movie__data">
             <p>{props.movie.title}</p>
        </div>
    </div>
  ) 
}

export default Movie;