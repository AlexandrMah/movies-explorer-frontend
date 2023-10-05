import React from "react";
import logo from "./../../images/logo.svg";
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  function navigateMain() {
    navigate('/');
  }

  return (
    <div>
      <button onClick={navigateMain} type="submit" className="logo">
        <img src={logo} alt="Логотип проекта Movies" className ="logo__img"/>
      </button>
    </div>
  )
}
  
  export default Logo;