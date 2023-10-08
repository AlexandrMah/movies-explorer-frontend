import React from "react";

function AboutProject() {

  return (
    <div className ="about-project" id="about-project">       
      <h2 className="about-project__name">О проекте</h2>

      <div className="about-project__info">
        <div className="about-project__block">
          <div className="about-project__item_title">Дипломный проект включал 5 этапов</div>
          <div className="about-project__item">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</div>
        </div>
        <div className="about-project__block">
          <div className="about-project__item_title">На выполнение диплома ушло 5 недель</div>      
          <div className="about-project__item">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</div>
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