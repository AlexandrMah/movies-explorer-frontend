import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from "../Logo/Logo";
import Navi from "../Navi/Navi";
import PopupWithForm from "../PopupMenu/PopupMenu";

function Header({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {

  const navigate = useNavigate();
  const location = useLocation();

  function navigateToMovies() {
    navigate('/movies');
    closePopups();
  }

  function navigateToSavedMovies() {
    navigate('/saved-movies');
    closePopups();
  }

  function navigateToProfile() {
    navigate('/profile');
    closePopups();
  }

  return (
    <header className="header">
      {location.pathname === "/" && <div className ="header__theme">
        < Logo 
          navigateToMain={navigateToMain}
        />
        < Navi />
      </div>}

      {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <div className ="header__theme header__theme_dark">
        < Logo 
          navigateToMain={navigateToMain}
        />
        < Navi 
          handleClickAddPlace ={handleClickAddPlace}
        />
      </div>}

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closePopups}
        navigateToMovies={navigateToMovies}
        navigateToSavedMovies={navigateToSavedMovies}
        navigateToProfile={navigateToProfile}
        navigateToMain={navigateToMain}
      />

    </header>
  )
}

export default Header;