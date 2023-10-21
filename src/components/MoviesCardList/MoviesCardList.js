import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, cardsMovies, handleAddMovie, handleDelMovie, filterStatus, addMovies, lengthMovies, filmStatus }) {
  const location = useLocation();

  //создание списка сохраненных фильмов
  function getSavedMovie() {
    return cardsMovies.map((props) => (
      <MoviesCard 
        key = {props._id}
        props = {props}
        handleAddMovie={handleAddMovie}
        handleDelMovie={handleDelMovie}
        cardsMovies={cardsMovies}/*---------------*/
      />
    ))
  }

  //создание списка всех фильмов
  function getMovie() {
    return movies.map((props) => (      
      <MoviesCard 
        key = {props.id}
        props = {props}
        handleAddMovie={handleAddMovie}
        handleDelMovie={handleDelMovie}
        cardsMovies={cardsMovies}
      />
    ))
  }

  function isDownloadOption(){
    if (!filterStatus){
      return <p className="cards-movies__message cards-movies__message__show">Введите ключевое слово для поиска</p>
    }
    else if (!filmStatus){
      return <p className="cards-movies__message cards-movies__message__show">Ничего не найдено, повторите запрос</p>
    }
    else if (filmStatus){
      return getMovie()
    }
    else {
      return <p className="cards-movies__message cards-movies__message__show">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    }
  }

  //Определение местоположения
  function getLocation() {
    return location.pathname === "/saved-movies"
  }
  //Определение отсутствия фильмов
  function getInfoAvailabilityMovies(){
    return movies.length === 0;
  }
  //Определение, что все фильмы показаны
  function getInfiMaxLenMovie(){
    return lengthMovies === movies.length;
  }



  return (
    <div className="cards-movies">

      <section className="cards-movies__elements">
 
        { getLocation() ? getSavedMovie() : isDownloadOption() }

      </section>

      <button onClick = {addMovies} type='button' className={`cards-movies__more-btn  ${(getLocation() || getInfoAvailabilityMovies() || getInfiMaxLenMovie()) && 'cards-movies__more-btn_show'}`} aria-label='Показать еще'>
        Ещё
      </button> 
    </div>   
  )
}
  
export default MoviesCardList;