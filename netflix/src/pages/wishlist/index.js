import react from "react";
import { useState } from "react";
import MovieCardWish from "../../components/MovieCardWish";
import { useEffect } from "react";

const Index = () => {

    const [wishlist, setWishlist]= useState();
    useEffect(() => {
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
      }, []);

    return(
        <div>
            {
                wishlist?(
                    <>
                    <div className="movies__section"> 
                        <h2>Ma wishlist</h2>
                        <div className="row"> 
                        {wishlist.map((movie) => (
                                <MovieCardWish className="Movie__Card" movie={movie}/>
                        ))}
                        </div>
                    </div> 
                  </>
                ):(
                    <>
                    </>
                )
            }
        </div>
    );
}
export default Index;