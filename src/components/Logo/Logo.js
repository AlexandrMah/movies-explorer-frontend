import React from "react";
import logo from "./../../images/logo.svg";


function Logo({ navigateToMain }) {
  
  return (
    <div>
      <button onClick={navigateToMain} type="button" className="logo">
        <img src={logo} alt="Логотип проекта Movies" className ="logo__img"/>
      </button>
    </div>
  )
}
  
  export default Logo;