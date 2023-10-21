import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace, cardsMovies, handleDelMovie, filterStatus, getListMoviesFilter }) {
  //Параметр фильтрации
  const [filterParametr, setFilterParametr] = React.useState('');
  /*--Список сохраненных фильмов--*/
  const [cardsMoviesFilter, setCardsMoviesFilter] = React.useState([]);

  //Чекбокс, состояние
  // const statusCheckbox = localStorage.getItem('checked') === 'on' ? true : false;
  // const [checked, setChecked] = React.useState(false);
  const [checkedSavedMovies, setCheckedSavedMovies] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('checkedSavedMovies') === null) localStorage.setItem('checkedSavedMovies', 'off');
    if (localStorage.getItem('checkedSavedMovies')) setCheckedSavedMovies(localStorage.getItem('checkedSavedMovies'))
    // if (localStorage.getItem('checked')) setChecked(localStorage.getItem('checked'))
  }, [])



  function chengeCheckbox(e) {
    // setChecked(e.target.value);
    // localStorage.setItem('checked', e.target.value);
    setCheckedSavedMovies(e.target.value);
    localStorage.setItem('checkedSavedMovies', e.target.value);
 }

  function onClickSearch(value){
    setFilterParametr(value) 
  }

  //Начальное сохранение фильмов
  React.useEffect(() => {
    setCardsMoviesFilter(cardsMovies)
  }, [cardsMovies])
  

  //Фильтрация сохраненных фильмов
  React.useEffect(() => {
    const result = getListMoviesFilter(cardsMovies, /*checked*/checkedSavedMovies, filterParametr)
    setCardsMoviesFilter(result)
    localStorage.setItem('listMoviesFilter', JSON.stringify(result));
  }, [/*checked*/ checkedSavedMovies, filterParametr, cardsMovies, getListMoviesFilter])

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
            // checked={checked}
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