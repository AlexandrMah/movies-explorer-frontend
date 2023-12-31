import React from "react";
import arrow from "./../../images/arrow.svg"

function Portfolio() {

  return (
    <div className ="portfolio">
      <h2 className="portfolio__name">Портфолио</h2>

      <ul className="portfolio__links">
        <li className="portfolio__item">
          <a href="https://github.com/AlexandrMah/first-project" target="blank" className="portfolio__link" >
            <p className="portfolio__link-name">Статичный сайт</p>
            <img src={arrow} alt="Логотип проекта Movies" className ="portfolio__arrow"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/AlexandrMah/russian-travel" target="blank" className="portfolio__link portfolio__link_line" >
            <p className="portfolio__link-name">Адаптивный сайт</p>
            <img src={arrow} alt="Логотип проекта Movies" className ="portfolio__arrow"/>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/AlexandrMah/react-mesto-api-full-gha" target="blank" className="portfolio__link portfolio__link_line" >
            <p className="portfolio__link-name">Одностраничное приложение</p>
            <img src={arrow} alt="Логотип проекта Movies" className ="portfolio__arrow"/>
          </a>
        </li>
      </ul>
      
    </div>
  )
}

export default Portfolio;