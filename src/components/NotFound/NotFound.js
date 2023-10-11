import React from "react";

function NotFound({ navigateToMain }) {

  return (
    <main>
      <section className ="not-found">   
        <h1 className ="not-found__name">404</h1>
        <p className="not-found__title">Страница не найдена</p>
        <button onClick={navigateToMain} type="button" className="not-found__btn-input">Назад</button>
      </section>
    </main>
  )
}

export default NotFound;