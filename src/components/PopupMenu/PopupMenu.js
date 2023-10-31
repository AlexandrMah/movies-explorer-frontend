import React from "react";
import popup_cross from "./../../images/Group.svg"
import icon from "./../../images/icon__account.svg";
import { useLocation } from 'react-router-dom';

function PopupWithForm({ isOpen, onClose, navigateToMovies, navigateToSavedMovies, navigateToProfile, navigateToMain }) {
  const location = useLocation();

  return (
    <div className={`popup ${isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container`}>
          <button onClick = {onClose} type="button" className="popup__button">
            <img src={popup_cross} alt="Значек закрытия меню" className ="popup__close-btn"/>
          </button>
          <button onClick = {navigateToMain} type="button" className={`popup__btn popup__btn_inteval-top ${location.pathname === "/" ? `popup__btn_line` : ""}`}>Главная</button>
          <button onClick = {navigateToMovies} type="button" className={`popup__btn ${location.pathname === "/movies" ? `popup__btn_line` : ""}`}>Фильмы</button>
          <button onClick = {navigateToSavedMovies} type="button" className={`popup__btn popup__btn_inteval-bottom ${location.pathname === "/saved-movies" ? `popup__btn_line` : ""}`}>Сохранённые фильмы</button>
          <button onClick={navigateToProfile} type="button" className="popup__element popup__element_dark popup__element_account">
              Аккаунт
              <img src={icon} alt="Логотип проекта Movies" className ="popup__img popup__img_dark"/>
          </button>
      </div>
    </div>
  )
}
  
export default PopupWithForm;