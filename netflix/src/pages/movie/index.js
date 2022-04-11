import { useState } from "react";
import { useEffect } from "react";
import moviesSevices from "../../services/movies.sevices";
import Link from "next/dist/client/link";
import MovieCard from "../../components/MovieCard";


const Index = () => { 
 
    const [genres, setGenres] = useState();
    useEffect(()=> {
        moviesSevices.getGenres()
        .then((data)=>{
            console.log(data.genres);
            setGenres(data.genres);
        })
        .catch(err=>console.log(err))
    },[]);

    
  const [movies, setMovies] = useState();
  const [Request, setRequest] = useState("");
  const submitRequest = (e) =>{
    e.preventDefault()
  }
  useEffect(() => {
    moviesSevices.getMovie(Request)
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      })
    .catch(err=>console.log(err))
  },[Request]);
  const onSuggestHandler = (Request)=>{
    setRequest(Request)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  var id=getRandomInt(50);
  const [films, setFilms] = useState();
  const [filtered, setFiltered] = useState();
    useEffect(()=> {
        moviesSevices.getPopularMovies(id)
        .then((data)=>{
            console.log(data.results);
            setFilms(data.results);
            setFiltered(data.results);
        })
        .catch(err=>console.log(err))
    },[]);
    

return ( 
   <div className="movies__genres">
       <div className="header">
           <div className="menu__deroulant">
                <ul className="menu__deroulant__title">
                        Films
                </ul>
                    <ul className="sous__menu">
                                {genres &&
                                    genres.map((genre) => (
                                    <li className="sous__menu__item">
                                        <Link href="/home">
                                            <a className="sous__menu__link">{genre.name}</a>
                                        </Link>
                                    </li>
                                ))}
                        </ul>
            </div>
            <div className="search__zone">
                <center>
                <form className="form-search" onSubmit={(e)=> submitRequest(e)}>
                    <input
                        type="text"
                        placeholder="Title of your movie"
                        id="search"
                        size="50"
                        className="input-search"
                        onChange={(e)=> setRequest(e.target.value)}
                    />
                    <input className="button_submit" onClick={()=>onSuggestHandler(Request)} type="submit" value="Rechercher"/>
                </form>
                </center>
            </div>
       </div>
       <div className="movies__section"> 
            <h2>NETFLIX ORIGINAL</h2>
                <div className="row"> 
                    {movies &&
                            movies.map((movie) => (
                            <MovieCard className="Movie__Card" movie={movie}/>
                    ))}
            </div>
        </div> 
        
    </div>
  ); 
} ;
export default Index;

