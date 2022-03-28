
export default {
    getMovies(){
        return fetch(" https://api.themoviedb.org/3/discover/movie?api_key=ed47e9d48b2a3e819ae44fbbf5577275&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate")
        .then((res) => res.json())
    },
}