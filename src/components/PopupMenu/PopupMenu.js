import React from "react";
import popup_cross from "./../../images/Group.svg"
import icon from "./../../images/icon__account.svg";

function PopupWithForm({ isOpen, onClose, navigateToMovies, navigateToSavedMovies, navigateToProfile, navigateToMain }) {

  return (
    <div className={`popup ${isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container`}>
          <button onClick = {onClose} type="button" className="popup__button">
            <img src={popup_cross} alt="Значек закрытия меню" className ="popup__close-btn"/>
          </button>
          <button onClick = {navigateToMain} type="button" className="popup__btn popup__btn_inteval-top">Главная</button>
          <button onClick = {navigateToMovies} type="button" className="popup__btn popup__btn_line">Фильмы</button>
          <button onClick = {navigateToSavedMovies} type="button" className="popup__btn popup__btn_inteval-bottom">Сохранённые фильмы</button>
          <button onClick={navigateToProfile} type="button" className="popup__element popup__element_dark popup__element_account">
              Аккаунт
              <img src={icon} alt="Логотип проекта Movies" className ="popup__img popup__img_dark"/>
          </button>
      </div>
    </div>
  )
}
  
export default PopupWithForm;