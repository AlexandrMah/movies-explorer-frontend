import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import * as moviesApi from './../../utils/MoviesApi';

function Movies({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace, cardsMovies, handleAddMovie, handleDelMovie, filterStatus, setFilterStatus, getListMoviesFilter }) {

  const [cardsCount, setCardsCount] = React.useState(0);
  const [columnCount, setColumnCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  /*----Список фильмов-----------*/
  const [movies, setMovies] = React.useState([]);
   /*---Список фильмов после фильтра----*/
  const [moviesFilter, setMoviesFilter] = React.useState([]);
  //Параметр фильтрации
  const [filterParametr, setFilterParametr] = React.useState(''); 

  //Чекбокс, состояние 
  const [checked, setChecked] = React.useState('');

  React.useEffect(() => {
    if (localStorage.getItem('checked') === null) localStorage.setItem('checked', 'off');
    if (localStorage.getItem('checked')) setChecked(localStorage.getItem('checked'));
    if (localStorage.getItem('movies') === null) localStorage.setItem('movies', JSON.stringify([]));
  }, [])
  
  React.useEffect(() => {    
    const list = JSON.parse(localStorage.getItem('movies'))
    if (list && !filterParametr) {
      const result = getListMoviesFilter(list, checked, localStorage.getItem('filterParametr'))
      setMoviesFilter(result)
      localStorage.setItem('moviesFilter', JSON.stringify(result));
      setCurrentPage(0)
    }
  }, [checked, filterParametr, getListMoviesFilter])

  // //Переключение и сохранение состояния чекбокса
  function chengeCheckbox(e) {
    setChecked(e.target.value);
    localStorage.setItem('checked', e.target.value);
 }

  //проверка наличия и загрузка фильмов
  function onClickSearch(value){
    setFilterStatus(true);
    localStorage.setItem('filterStatus', true);
    setFilterParametr(value)

    //загрузка фильмов с сайта, если они еще не загружены
    if (!movies.length){
      moviesApi.getMovies()
        .then((data) => {
          localStorage.setItem('movies', JSON.stringify(data));
          setMovies(data);
        })
        .catch(err => console.log(err));
    }    
  }

  //Фильтрация фильмов
  React.useEffect(() => {
    if (filterParametr){
      const result = getListMoviesFilter(movies, checked, filterParametr)
      setMoviesFilter(result)
      localStorage.setItem('moviesFilter', JSON.stringify(result));
      localStorage.setItem('filterParametr', filterParametr);
      setCurrentPage(0)
    }
  }, [checked, filterParametr, movies, getListMoviesFilter])
  
  //Отображение количесва карточек(screenResolution)
  React.useEffect(() => {
    calculateWidth()
    window.addEventListener("resize", calculateWidth);
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [])

  function calculateWidth() {
    let screenResolution = window.innerWidth;
    if (screenResolution > 1200){
      setCardsCount(12);
      setColumnCount(3);
    }
    else if (screenResolution > 749){
      setCardsCount(8);
      setColumnCount(2);
    }   
    else{
      setCardsCount(5);
      setColumnCount(1);
    }
  }

  function calculateCardsList() {
    let newList = cardsCount + currentPage * columnCount;
    if (newList >= moviesFilter.length)
      newList = moviesFilter.length;
    return newList;
  }
  
  //добавление строки с карточками 
  function addMovies() {
    setCurrentPage(currentPage + 1);
  }
  
  const visibleListMovies = moviesFilter.slice(0, calculateCardsList());



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
          
          <SearchForm 
            chengeCheckbox={chengeCheckbox}
            onClickSearch={onClickSearch}
            checked={checked}
          />

          <MoviesCardList 
            movies={visibleListMovies}
            cardsMovies={cardsMovies}
            handleAddMovie={handleAddMovie}
            handleDelMovie={handleDelMovie}
            filterStatus={filterStatus}
            addMovies={addMovies}
            lengthMovies={moviesFilter.length}
          />

        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;