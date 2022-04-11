import React from 'react'
import { useEffect, useState } from 'react';
import moviesSevices from '../services/movies.sevices';
import MovieModal from './MovieModal';


const Banner = () =>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    var id=getRandomInt(50);

    const [movie, setMovie]=useState();
    useEffect(()=>{
    moviesSevices.getPopularMovies(id)
    .then((data) => {
        console.log(data)
        setMovie(
            data.results[
            getRandomInt(10)
        ])
    })
    .catch(err=>console.log(err))
    },[]);

    function truncateText(string, n ) {
        return string?.length> n? 
               string.substr(0, n-1) + "..."
               :
               "No description";
    
    }
    const [isActive, setIsActive]=useState(false);

  return (
      <>
      </>
  )
}

export default Banner;

/*
<div className='banner'>
<img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} />
<div className='content'>
      <div className='banner__title'>
          <p className="">{movie.title}</p>
      </div>
      <div className='banner__description'>
          <p>{truncateText(movie.overview, 100)}</p>
      </div>
      <div className='banner__footer'>
          <button className='btn__banner'>Lecture</button>
          <button className='btn__banner'onClick={() => {setIsActive(!isActive); console.log(isActive)}}>Plus d'Infos</button>
          <MovieModal movie={movie} active={isActive} closefunction={() => {setIsActive(!isActive); console.log(isActive)}}/>
      </div>
</div>

</div>
*/