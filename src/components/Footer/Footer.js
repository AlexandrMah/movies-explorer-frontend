import React from "react";

function Footer() {

  return (
    <div className ="footer">
      <h2 className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__info">
        <div class="footer__item">&#169; {new Date().getFullYear()}</div>
        <div class="footer__items">
          <a href="https://practicum.yandex.ru/" target="blank" class="footer__item">Яндекс.Практикум</a>
          <a href="https://github.com/" target="blank" class="footer__item ">Github</a>
        </div>
      </div>

    </div>
  )
}

export default Footer;