import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard() {

  const location = useLocation();

  const [likeActive, setLikeActive] = React.useState(false);

  function handleLikeClick (e) {
    e.preventDefault();
    if (likeActive === false) {
      setLikeActive(true);
    } else {
      setLikeActive(false);
    }    
  }

  const cardLikeButtonClassName = ( 
    `element__like ${likeActive && 'element__like_active'} ${!likeActive && 'element__like_disabled'}` 
  );

  return (
    <>
      <article className="element">
        <button /*onClick = {handleClick}*/ type='button' className="element__button-img">
          <img src='https://w.forfun.com/fetch/4f/4fa04bf7e7f6032ea073e8abdd5d7dca.jpeg'/*{props.link}*/ alt='props.name'/*{props.name}*/ className="element__image"/>
        </button>                
        <div className="element__info">
          <h2 className="element__name">Страх и ненависть в Лас-Вегасе{/*props.name*/}</h2>
          {location.pathname === "/movies" && 
          <div className="element__likes">
            <button onClick = {handleLikeClick} type="button" className={cardLikeButtonClassName}/>
          </div>}
          {location.pathname === "/saved-movies" && 
          <div className="element__likes">
            <button /*onClick = {handleDelMovie}*/ type="button" className='element__like element__del'/>
          </div>}
        </div>
        {<p className="element__time" >1ч 21мин</p>}
      </article>
    </>    
  )
}
  
  export default MoviesCard;