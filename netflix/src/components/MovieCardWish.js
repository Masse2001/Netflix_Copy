
import MovieModal from "./MovieModal";
import react from "react";
import { useState } from "react";
import { useEffect } from "react";




const MovieCardWish = (props) => { 
    const [isActive, setIsActive]=useState(false);


    const [wishlist, setWishlist] = useState();
    useEffect(() => {
      setWishlist(JSON.parse(localStorage.getItem("whislist")) || []);
    }, []);

    const doAction = (movie) =>{
      const filteredMovie=wishlist.filter((item) => item.id != movie.id);
      localStorage.setItem('wishlist', JSON.stringify(filteredMovie));
      setWishlist(filteredMovie);
  }
  return ( 
     <>
        <div className="movie__card">
            <div className="card__img">
              <img src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path} />
            </div>
            <div className="card__body">
              <div className="card__title">{props.movie.title}</div>
            </div>
            <div className="card__footer" >
              <div className="icon__play" >
                <span>Play</span>
              </div>
              <div className="icon__add" onClick={()=> doAction(props.movie)}>
                <span>taken</span>
              </div>
              <div className="icon__down" onClick={() => {setIsActive(!isActive); console.log(isActive)}}>
                <span>Info</span>
              </div>
            </div>
        </div>
        <MovieModal movie={props.movie} active={isActive} closefunction={() => {setIsActive(!isActive); console.log(isActive)}}/>

     </> 
     ) 
}
export default MovieCardWish;