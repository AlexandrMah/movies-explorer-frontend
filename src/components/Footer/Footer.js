import React from "react";

function Footer() {

  return (
    <footer className ="footer">
      <h2 className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</h2>

      <div className="footer__info">
        <p className="footer__item">&#169; {new Date().getFullYear()}</p>
        <ul className="footer__items">
          <li className="footer__point">
            <a href="https://practicum.yandex.ru/" target="blank" className="footer__item">Яндекс.Практикум</a>
          </li>
          <li className="footer__point footer__point_indent">
            <a href="https://github.com/" target="blank" className="footer__item">Github</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer;