import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";

function Movies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {

  return (
    <>
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}
      />
      <main>
        <section className="movies">
          
          <SearchForm />
          <MoviesCardList />

          <button /*onClick = {handleClick}*/ type='button' className="movies__more-btn" aria-label='Показать еще'>
            Ещё
          </button>


        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;