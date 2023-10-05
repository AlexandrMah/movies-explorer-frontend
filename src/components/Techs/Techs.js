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
        <p class="techs__element">HTML</p>
        <p class="techs__element">CSS</p>
        <p class="techs__element">JS</p>
        <p class="techs__element">React</p>
        <p class="techs__element">Git</p>
        <p class="techs__element">Express.js</p>
        <p class="techs__element">mongoDB</p>
      </div>


    </div>
  )
}

export default Techs;