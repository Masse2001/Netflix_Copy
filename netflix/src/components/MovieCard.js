import react, {useEffect} from "react";
import Button from "./Button";

const MovieCard = (props) => { 
  return ( 
      <>{
          props.isActive? 
          (
              <div className="overlay">
                  <div className="overlay__img">
                    <img src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path} />
                  </div>
                  <p className="overlay__title">{props.movie.title}</p>
                  <Button title="Lire" classes="btn btn__color-red" />
                  <Button title="Ajouter à ma liste" classes="btn btn__color-red" />
              </div>
          ):("")
      }
      </>
   
  ) 
}

export default MovieCard;