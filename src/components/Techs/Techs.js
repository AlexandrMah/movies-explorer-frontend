import React from "react";


function Techs() {

  return (
    <div className ="techs" id="techs">
      <h2 className="techs__name">Технологии</h2>

      <div className="techs__info">
        <h2 className="techs__title">7 технологий</h2>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>

      <div className="techs__picture">
        <p className="techs__element">HTML</p>
        <p className="techs__element">CSS</p>
        <p className="techs__element">JS</p>
        <p className="techs__element">React</p>
        <p className="techs__element">Git</p>
        <p className="techs__element">Express.js</p>
        <p className="techs__element">mongoDB</p>
      </div>


    </div>
  )
}

export default Techs;