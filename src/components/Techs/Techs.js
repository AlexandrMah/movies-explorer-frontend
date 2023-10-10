import React from "react";


function Techs() {

  return (
    <div className ="techs" id="techs">
      <h2 className="techs__name">Технологии</h2>

      <div className="techs__info">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <ul className="techs__picture">
        <li className="techs__item">
          <p className="techs__element">HTML</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">CSS</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">JS</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">React</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">Git</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">Express.js</p>
        </li>
        <li className="techs__item">
          <p className="techs__element">mongoDB</p>
        </li>
      </ul>


    </div>
  )
}

export default Techs;