import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {

  return (
    <div className="movies">
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}
      />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />

      <button /*onClick = {handleClick}*/ type='button' className="movies__more-btn" aria-label='Показать еще'>
        Ещё
      </button>   

      <Footer />
    </div>
  )
}

export default Movies;