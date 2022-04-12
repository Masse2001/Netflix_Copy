
import MovieModal from "./MovieModal";
import react from "react";
import { useState } from "react";
import { useEffect } from "react";



const MovieCard = (props) => { 

  const [isActive, setIsActive]=useState(false);
  const [wishlist, setWishlist] = useState();
 
  useEffect(() => {
    setWishlist(JSON.parse(localStorage.getItem("whislist")) || []);
  }, []);

  const addToWishlist = (element) =>{
    const wishArray = [];

    if (localStorage.getItem('wishlist')){
      const localStorageWishlist = JSON.parse(localStorage.getItem('wishlist'));
      localStorageWishlist.forEach( movie => {
        wishArray.push(movie)
      });
      const object=element;
        element={"adult":object.adult, "backdrop_path":object.backdrop_path, "genres_ids":object.genres_ids, "id":object.id, "original_language": object.original_language,
        "original_title": object.original_title,
        "overview": object.overview,
        "popularity": object.popularity,
        "poster_path": object.poster_path,
        "release_date": object.release_date,
        "title": object.title,
        "video": object.video,
        "vote_average": object.vote_average,
        "vote_count": object.vote_count,
        "statut":1 //défini si l'élément est présent dans la wishlist ou pas
        }
      wishArray.push(element);
      console.log(wishArray);
      localStorage.setItem('wishlist', JSON.stringify(wishArray));
    }
    else{
      const object=element;
      element={"adult":object.adult, "backdrop_path":object.backdrop_path, "genres_ids":object.genres_ids, "id":object.id, "original_language": object.original_language,
      "original_title": object.original_title,
      "overview": object.overview,
      "popularity": object.popularity,
      "poster_path": object.poster_path,
      "release_date": object.release_date,
      "title": object.title,
      "video": object.video,
      "vote_average": object.vote_average,
      "vote_count": object.vote_count,
      "statut":1 //défini si l'élément est présent dans la wishlist ou pas
      }
      wishArray.push(element);
      localStorage.setItem('wishlist', JSON.stringify(wishArray));
    }
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
              <div className="icon__add" onClick={()=> addToWishlist(props.movie)}>
                <span>Add</span>
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
export default MovieCard;