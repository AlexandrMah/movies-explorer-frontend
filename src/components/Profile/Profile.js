import React from "react";
import Header from "../Header/Header";

function Profile() {

  return (
      <section className="profile">
        <Header />
        <div className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="profile__form">
            
            <label className="profile__field">
              <p className="profile__input-name">Имя</p>
              <input 
                type="text" 
                value="name"/*{name || ''}*/
                placeholder="Имя" 
                name="name" 
                id="name-input" 
                className="profile__element profile__element_key_name" 
                required 
                minLength="2" 
                maxLength="40"
                // onChange = {evt => setName(evt.target.value)}
              />            
            </label>
            <span className="profileName-input-error profile__input-error"></span>

            <label className="profile__field profile__field_line">
              <p className="profile__input-name">E-mail</p>
              <input 
                type="email" 
                placeholder="Email" 
                value="email@email.ru"/*{email}*/
                name="email" 
                id="email-input" 
                className="profile__element profile__element_key_name" 
                required 
                minLength="2" 
                maxLength="30"
                /*onChange = {evt => setEmail(evt.target.value)}*/
              />            
            </label>
            <span className="name-input-error profile__input-error"></span>

            <button type="submit" className="profile__btn">Редактировать</button>

            <button /*onClick={signIn}*/ type="button" className="profile__btn-exit">Выйти из аккаунта</button>

          </form>
        </div>
      </section>
  )
}

export default Profile;