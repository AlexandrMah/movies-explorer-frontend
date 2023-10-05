import React from "react";
import Logo from "../Logo/Logo";
import Navi from "../Navi/Navi";
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      {location.pathname === "/" && <header className ="header__theme">       
        < Logo />
        < Navi />
      </header>}

      {(location.pathname === "/movies" || location.pathname === "/saved-movies" || location.pathname === "/profile") && <header className ="header__theme header__theme_dark">       
        < Logo />
        < Navi />
      </header>}
    </div>    
  )
}

export default Header;