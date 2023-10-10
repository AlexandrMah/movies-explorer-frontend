import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
function MoviesCardList() {

  return (
    <section className="cards-movies">
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
    </section>    
  )
}
  
  export default MoviesCardList;