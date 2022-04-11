import react, {useEffect} from "react";
import Button from "./Button";

const MovieModal = (props) => { 
  return ( 
    <>
      {props.active ? (
          <div className="modal__container">
          <div className="movie__modal">
            <div className="modal__header">
                <div className="close__cross" onClick={props.closefunction}>
                      <span></span>
                      <span></span>
                </div>
                <div className="header__baner">
                  <img src={"https://image.tmdb.org/t/p/w500" + props.movie.backdrop_path} alt={props.movie.path} />
                </div>
                <h1 className="header__title">{props.movie.title}</h1>
                <div className="header__content">
                  <p className="header__date">{props.movie.release_date}</p>
                  <button> Lecture</button>
                  <button onClick={()=> addToWishlist(props.movie)}> Add</button>
                </div>
                  
            </div>
            <div className="modal__body">
                <div className="modal__body__description">{props.movie.overview}</div>
            </div>
            <div className="modal__footer">
  
            </div>
          </div>
        </div>
        ) : (
          ""
        )}
    </>
   
  ) 
}
export default MovieModal;