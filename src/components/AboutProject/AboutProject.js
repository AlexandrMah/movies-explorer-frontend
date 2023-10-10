import React from "react";

function AboutProject() {

  return (
    <div className ="about-project" id="about-project">
      <h2 className="about-project__name">О проекте</h2>

      <div className="about-project__info">
        <div className="about-project__item">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__item">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="about-project__long">
        <p className="about-project__time about-project__time_color-green">1 неделя</p>
        <p className="about-project__time about-project__time_color-grey">4 недели</p>
        <p className="about-project__time">Back-end</p>
        <p className="about-project__time">Front-end</p>
      </div>

    </div>
  )
}

export default AboutProject;