import React from "react";
import logo from './../images/logo.svg';

function Header({userData, signUserOut}) {

return (
  <header className ="header">
       <img src={logo} alt="Логотип проекта Movies" className ="header__logo"/>
       <div className="header__nav">
        
       </div>
      
  </header>
)
}

export default Header;