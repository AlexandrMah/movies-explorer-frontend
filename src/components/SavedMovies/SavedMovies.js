import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {

  return (
    <>
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}      
      />
      <main>
        <section className="saved-movies">
      
          <SearchForm />
          <MoviesCardList />
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;