import React from "react";
import popup_cross from "./../../images/Group.svg"
import icon from "./../../images/icon__account.svg";

function PopupWithForm({ isOpen, onClose, navigateToMovies, navigateToSavedMovies, navigateToProfile, navigateToMain }) {
  console.log(isOpen);

  return (
    <section className={`popup ${isOpen ? `popup_opened` : ""}`}>
      <div className={`popup__container`}>
          <button onClick = {onClose} type="button" className="popup__button">
            <img src={popup_cross} alt="Значек закрытия меню" className ="navi__close-btn"/>
          </button>
          <button onClick = {navigateToMain} type="button" className="popup__btn popup__btn_inteval-top">Главная</button>
          <button onClick = {navigateToMovies} type="button" className="popup__btn popup__btn_line">Фильмы</button>
          <button onClick = {navigateToSavedMovies} type="button" className="popup__btn popup__btn_inteval-bottom">Сохранённые фильмы</button>
          <button onClick={navigateToProfile} type="submit" className="navi__element navi__element_dark navi__element_account">
            Аккаунт
            <div className="navi__account-img navi__account-img_dark">
              <img src={icon} alt="Логотип проекта Movies" className ="navi__img"/>
            </div>
          </button>
      </div>
    </section>
  )
}
  
export default PopupWithForm;