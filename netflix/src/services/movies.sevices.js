

export default {

    getPopularMovies(id){
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=ed47e9d48b2a3e819ae44fbbf5577275&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${id}&with_watch_monetization_types=flatrate`)
        .then((res) => res.json())
    },

    getMovie(title){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed47e9d48b2a3e819ae44fbbf5577275&language=en-US&query=${title}&page=1&include_adult=false`)
        .then((res) => res.json())
    },

    getGenres(){
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=ed47e9d48b2a3e819ae44fbbf5577275&language=en-US`)
        .then((res) => res.json())
    }
}


//${id}