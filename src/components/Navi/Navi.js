import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import icon from "./../../images/icon__account.svg";

function NavHeader() {

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
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToMovies} type="submit" className="navi__element navi__element_dark">Фильмы</button>}
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToSavedMovies} type="submit" className="navi__element navi__element_left navi__element_dark">Сохраненные фильмы</button>}
      </div>
      <div className="navi__user">
        {location.pathname === "/" && <button onClick={navigateToSignUp} type="submit" className="navi__element navi__element">Регистрация</button>}
        {location.pathname === "/" && <button onClick={navigateToSignIn} type="submit" className="navi__element navi__element_left">Войти</button>}
        {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <button onClick={navigateToProfile} type="submit" className="navi__element navi__element_dark navi__element_account">
          Аккаунт
          <div className="navi__account-img navi__account-img_dark">
            <img src={icon} alt="Логотип проекта Movies" className ="navi__img"/>
          </div>
        </button>}
      
      
      </div>

    </div>

  )
}
  
  export default NavHeader;