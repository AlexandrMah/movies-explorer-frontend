import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {

  return (
    <div className="main">
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}      
      />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <Footer />
    </div>
  )
}

export default SavedMovies;