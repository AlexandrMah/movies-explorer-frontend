import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard({ props, handleAddMovie, handleDelMovie, cardsMovies }) {
  const location = useLocation();

  const [likeActive, setLikeActive] = React.useState(false);
  const [isSaveMovie, setIdSaveMovies] = React.useState({});

  const image = location.pathname === "/movies" ? 'https://api.nomoreparties.co' + props.image.url : props.image;
  const thumbnail = (location.pathname === "/movies") ? 'https://api.nomoreparties.co' + props.image.formats.thumbnail.url : props.thumbnail;

  React.useEffect(() => {
    const movieIdStatus = cardsMovies.some(i => i.movieId === props.id)
    movieIdStatus ? setLikeActive(true) : setLikeActive(false);
    setIdSaveMovies(cardsMovies.find(i => i.movieId === props.id) || props);
  }, [props, cardsMovies])

  const handleClick = () => {
    window.open(props.trailerLink)
  }

  const handleLikeClick = (e) => {
    e.preventDefault();

    if (likeActive === false) {
      setLikeActive(true);
      const data = {
        country: props.country,
        director: props.director,
        duration: props.duration,
        year: props.year,
        description: props.description,
        image: image,
        trailerLink: props.trailerLink,
        nameRU: props.nameRU,
        nameEN: props.nameEN,
        thumbnail: thumbnail,
        movieId: props.id,        
      }
      handleAddMovie(data);
    } else {
      handleDelMovie(isSaveMovie);
      setLikeActive(false);
    }
  }

  const handleDelClick = (e) => {
    e.preventDefault();
    handleDelMovie(isSaveMovie);
    setLikeActive(false);
  }

  const cardLikeButtonClassName = ( 
    `element__like ${likeActive && 'element__like_active'} ${!likeActive && 'element__like_disabled'}` 
  );

  //отображение времени
  const hours = Math.floor(props.duration / 60);
  const minutes = props.duration % 60;
  const time = `${hours}ч ${minutes}м`;

  return (
    <>
      <article className="element">
        <button onClick = {handleClick} type='button' className="element__button-img">
          <img src={image} alt={props.nameRU} className="element__image"/>
        </button>                
        <div className="element__info">
          <h2 className="element__name">{props.nameRU}</h2>
          {location.pathname === "/movies" && 
          <div className="element__likes">
            <button onClick = {handleLikeClick} type="submit" className={cardLikeButtonClassName}/>
          </div>}
          {location.pathname === "/saved-movies" && 
          <div className="element__likes">
            <button onClick = {handleDelClick} type="submit" className='element__like element__del'/>
          </div>}
        </div>
        {<p className="element__time" >{time}</p>}
      </article>
    </>    
  )
}
  
  export default MoviesCard;