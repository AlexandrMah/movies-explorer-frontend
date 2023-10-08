import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import icon from "./../../images/icon__account.svg";
import popup_menu from "./../../images/popup_menu.svg";

function NavHeader({ handleClickAddPlace }) {

  const navigate = useNavigate();
  const location = useLocation();

  function navigateToSignUp() {
    navigate('/signup');
  }

  function navigateToSignIn() {
    navigate('/signin');
  }

  function navigateToMovies() {
    navigate('/movies');
  }

  function navigateToSavedMovies() {
    navigate('/saved-movies');
  }

  function navigateToProfile() {
    navigate('/profile');
  }

  return (
    <div className="navi">
      <div className="navi__moovie">
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToMovies} type="submit" className="navi__element navi__element_dark navi__hide">Фильмы</button>}

        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToSavedMovies} type="submit" className="navi__element navi__element_left navi__element_dark navi__hide">Сохраненные фильмы</button>}
      </div>
      <div className="navi__user">
        {location.pathname === "/" && <button onClick={navigateToSignUp} type="submit" className="navi__element navi__element_text">Регистрация</button>}

        {location.pathname === "/" && <button onClick={navigateToSignIn} type="submit" className="navi__element navi__element_text navi__element_btn">Войти</button>}

        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToProfile} type="submit" className="navi__element navi__element_dark navi__element_account navi__hide">
          Аккаунт
          <div className="navi__account-img navi__account-img_dark">
            <img src={icon} alt="Логотип проекта Movies" className ="navi__img"/>
          </div>
        </button>}
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={handleClickAddPlace} type="submit" className="navi__element navi__element_left navi__element_dark navi__show">
          <img src={popup_menu} alt="Значек открытия меню" className ="navi__popup-menu"/>
        </button>}
      
      </div>
    </div>
  )
}
  
  export default NavHeader;