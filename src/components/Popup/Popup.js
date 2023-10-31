import React from "react";

function InfoTooltip({ changeProfileStatus, isStatusChangeProfilePopupOpen, closePopups }) {

  return (
    <section className={`popup-response ${isStatusChangeProfilePopupOpen ? `popup-response_opened` : ""}`}>
    <div className={`popup-response__container popup-response__container_register`}>
      {/* <img src={registered ? okRegister : noRegister} alt="" className="popup-response__register-image"/> */}
      <h2 className="popup-response__title popup-response__title_register">{`${changeProfileStatus ? 'Профиль изменен успешно' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
      <button onClick = {closePopups} type="button" className="popup-response__close-btn"/>
    </div>
  </section>
  )
}

export default InfoTooltip;