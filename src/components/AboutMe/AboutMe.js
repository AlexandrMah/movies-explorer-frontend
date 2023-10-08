import React from "react";
import photo from "./../../images/Photo.png"

function AboutMe() {

  return (
    <div className ="about-me" id="about-me">
      <h2 className="about-me__name">Студент</h2>

      <div className="about-me__info">
        <img src={photo} alt="Логотип проекта Movies" className ="about-me__photo"/>
        <h2 className="about-me__title">Александр</h2>
        <p className="about-me__subtitle">Студент Яндекс-Практикум, 40 лет</p>
        <p className="about-me__text">Я родился и живу в городе Кимовске, закончил технологический факультет ТулГУ, по направлению автоматизация и управление. Увлекаюсь спортом. В настоящее время работаю учителем информатики в школе.</p>
        <div className="about-me__links">
          <a href="https://github.com/AlexandrMah" target="blank" className="about-me__link" >Github</a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;