import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList() {

  return (
    <div className="cards-movies">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </div>    
  )
}
  
  export default MoviesCardList;