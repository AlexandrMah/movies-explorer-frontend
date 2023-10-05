import React from "react";

function NavTab() {

  return (
    <div className ="nav">       
      <a href="#about-project" className="nav__button">О проекте</a>
      <a href="#techs" className="nav__button nav_button_interval">Технологии</a>
      <a href="#about-me" className="nav__button nav_button_interval">Студент</a>
    </div>
  )
}

export default NavTab;