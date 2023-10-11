import React from "react";
import landingLogo from "./../../images/landing-logo.svg";

function Promo() {

  return (
    <div className ="promo">       
      <img src={landingLogo} alt="Логотип проекта Movies" className ="promo__logo"/>
      <h1 className ="promo__name">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  )
}

export default Promo;