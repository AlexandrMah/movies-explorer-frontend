import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import icon from "./../../images/icon__account.svg";
import popup_menu from "./../../images/popup_menu.svg";

function NavHeader({ handleClickAddPlace, userData, isLoggedIn }) {

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
    <nav className="navi">
      <div className="navi__moovie">
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToMovies} type="button" className="navi__element navi__element_dark navi__hide">Фильмы</button>}

        {location.pathname === "/" && isLoggedIn && <button onClick={navigateToMovies} type="button" className="navi__element  navi__hide">Фильмы</button>}

        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToSavedMovies} type="button" className="navi__element navi__element_left navi__element_dark navi__hide">Сохраненные фильмы</button>}

        {location.pathname === "/" && isLoggedIn &&  <button onClick={navigateToSavedMovies} type="button" className="navi__element navi__element_left navi__hide">Сохраненные фильмы</button>}

      </div>
      <div className="navi__user">
        {location.pathname === "/" && !isLoggedIn && <button onClick={navigateToSignUp} type="button" className="navi__element navi__element_text">Регистрация</button>}

        {location.pathname === "/" && !isLoggedIn && <button onClick={navigateToSignIn} type="button" className="navi__element navi__element_text navi__element_btn">Войти</button>}

        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToProfile} type="button" className="navi__element navi__element_dark navi__element_account navi__hide">
          {userData.name}
            <img src={icon} alt="Логотип проекта Movies" className ="navi__img navi__img_dark"/>
        </button>}

        {location.pathname === "/" && isLoggedIn && <button onClick={navigateToProfile} type="button" className="navi__element  navi__element_account navi__hide">
          {userData.name}
            <img src={icon} alt="Логотип проекта Movies" className ="navi__img"/>
        </button>}

        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={handleClickAddPlace} type="button" className="navi__element navi__element_left navi__element_dark navi__show">
          <img src={popup_menu} alt="Значек открытия меню" className ="navi__popup-menu"/>
        </button>}

        {location.pathname === "/" && isLoggedIn && <button onClick={handleClickAddPlace} type="button" className="navi__element navi__element_left navi__show">
          <img src={popup_menu} alt="Значек открытия меню" className ="navi__popup-menu"/>
        </button>}
      
      </div>
    </nav>
  )
}
  
  export default NavHeader;