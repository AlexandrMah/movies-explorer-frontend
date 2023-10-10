import React from "react";

function NavTab() {

  return (
    <nav className ="nav">
      <ul className="nav__list">      
        <li className="nav__item"><a href="#about-project" className="nav__button">О проекте</a></li>
        <li className="nav__item"><a href="#techs" className="nav__button nav__button_interval">Технологии</a></li>
        <li className="nav__item"><a href="#about-me" className="nav__button nav__button_interval">Студент</a></li>
      </ul> 
    </nav>
  )
}

export default NavTab;