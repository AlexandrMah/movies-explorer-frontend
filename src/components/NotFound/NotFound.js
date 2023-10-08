import React from "react";

function NotFound({ navigateToMain }) {

  return (
    <div className ="not-found">   
      <h2 className ="not-found__name">404</h2>
      <p className="not-found__title">Страница не найдена</p>
      <button onClick={navigateToMain} type="button" className="not-found__btn-input">Назад</button>
    </div>
  )
}

export default NotFound;