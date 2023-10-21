import React from "react";
import { useNavigate } from 'react-router-dom';/*+*/

function NotFound({ navigateToMain }) {

  const navigate = useNavigate();/*+*/

  function goBack () {
    navigate(-1);
  }

  return (
    <main>
      <section className ="not-found">   
        <h1 className ="not-found__name">404</h1>
        <p className="not-found__title">Страница не найдена</p>
        <button onClick={ goBack /*navigateToMain*/} type="button" className="not-found__btn-input">Назад</button>
      </section>
    </main>
  )
}

export default NotFound;