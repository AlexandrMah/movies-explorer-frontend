import React from "react";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardList from "./../MoviesCardList/MoviesCardList";
import * as moviesApi from './../../utils/MoviesApi';
import Preloader from "./../Preloader/Preloader"

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
  //Контроль прелоадера
  const [isLoading, setIsLoading] = React.useState(false);
    //Контроль, были ли найдены фильмы
    const [filmStatus, setFilmStatus] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('checked') === null) localStorage.setItem('checked', 'off');
    if (localStorage.getItem('checked')) setChecked(localStorage.getItem('checked'));
    if (localStorage.getItem('movies') === null) localStorage.setItem('movies', JSON.stringify([]));
  }, [])
  
  //Проверка при перезагрузке странице есть ли в localStorage фильмы и фильтрация, если есть, то информация загружаеься с их учетом
  React.useEffect(() => {
    console.log('q111')  
    const list = JSON.parse(localStorage.getItem('movies'))
    /*---*/
    if (list.length === 0){
      return
    }
    /*---*/
    if (list && !filterParametr) {
      const result = getListMoviesFilter(list, checked, localStorage.getItem('filterParametr'))      
      // setFilterParametr(localStorage.getItem('filterParametr'))
      setMoviesFilter(result)
      localStorage.setItem('moviesFilter', JSON.stringify(result));
      setCurrentPage(0)
      getInfoMovieSearch (result)
    }
  }, [checked, filterParametr/*, getListMoviesFilter*/])

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
    localStorage.setItem('filterParametr', value);

    //загрузка фильмов с сайта, если они еще не загружены
    if (!movies.length){
      setIsLoading(true)
      moviesApi.getMovies()
        .then((data) => {
          localStorage.setItem('movies', JSON.stringify(data));
          setMovies(data);
          setIsLoading(false)
        }) 
        .catch(err => {
          console.log(err);
          setIsLoading(false)
        });
    }     
  }

  //устанавливаем значение найдены ли фильмы
  function getInfoMovieSearch (list) {
    list.length === 0 ? setFilmStatus(false) : setFilmStatus(true);
  }

  //Фильтрация фильмов
  React.useEffect(() => {
    console.log('q222')
    if (!movies){
      return
    }
    if (filterParametr){
      const result = getListMoviesFilter(movies, checked, filterParametr)
      setMoviesFilter(result)
      localStorage.setItem('moviesFilter', JSON.stringify(result));
      localStorage.setItem('filterParametr', filterParametr);
      setCurrentPage(0)
      getInfoMovieSearch (result)
    }
  }, [checked, filterParametr, movies/*, getListMoviesFilter*/])
  
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
      setColumnCount(2);
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
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList 
              movies={visibleListMovies}
              cardsMovies={cardsMovies}
              handleAddMovie={handleAddMovie}
              handleDelMovie={handleDelMovie}
              filterStatus={filterStatus}
              addMovies={addMovies}
              lengthMovies={moviesFilter.length}
              filmStatus={filmStatus}
            />)}

        </section>
      </main>
      <Footer />
    </>
  )
}

export default Movies;