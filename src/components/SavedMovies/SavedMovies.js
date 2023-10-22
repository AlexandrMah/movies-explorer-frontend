import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace, cardsMovies, handleDelMovie, filterStatus, getListMoviesFilter }) {
  //Параметр фильтрации
  const [filterParametrSaveMovie, setFilterParametrSaveMovie] = React.useState('');
  /*--Список сохраненных фильмов--*/
  const [cardsMoviesFilter, setCardsMoviesFilter] = React.useState([]);

  //Чекбокс, состояние
  const [checkedSavedMovies, setCheckedSavedMovies] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('checkedSavedMovies') === null) localStorage.setItem('checkedSavedMovies', 'off');
    if (localStorage.getItem('checkedSavedMovies')) setCheckedSavedMovies(localStorage.getItem('checkedSavedMovies'))
  }, [])

  function chengeCheckbox(e) {
    setCheckedSavedMovies(e.target.value);
    localStorage.setItem('checkedSavedMovies', e.target.value);
 }

  function onClickSearch(value){
    setFilterParametrSaveMovie(value) 
  }

  //Начальное сохранение фильмов
  React.useEffect(() => {
    setCardsMoviesFilter(cardsMovies)
  }, [cardsMovies])  

  //Фильтрация сохраненных фильмов
  React.useEffect(() => {
    console.log('q333')
    const result = getListMoviesFilter(cardsMovies, checkedSavedMovies, filterParametrSaveMovie)
    setCardsMoviesFilter(result)
    localStorage.setItem('listMoviesFilter', JSON.stringify(result));
  }, [checkedSavedMovies, filterParametrSaveMovie, cardsMovies,/*getListMoviesFilter*/])

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
      
          <SearchForm 
            chengeCheckbox={chengeCheckbox}
            onClickSearch={onClickSearch}
            checked={checkedSavedMovies}
          />
          <MoviesCardList 
            cardsMovies={cardsMoviesFilter}//{cardsMovies}
            handleDelMovie={handleDelMovie}
            filterStatus={filterStatus}
          />
          
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;