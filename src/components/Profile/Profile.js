import React from "react";
import Header from "../Header/Header";

function Profile({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace }) {
  const [saveInfo, setSaveInfo] = React.useState(false);

  function editStatusProfileOnSave (e){
    e.preventDefault();
    setSaveInfo(true);
  }

  function editStatusProfileOffSave (e){
    e.preventDefault();
    setSaveInfo(false);
  }

  const saveProfileOff = ( 
    `profile__btn ${!saveInfo && 'profile__btn_active'} ${saveInfo && 'profile__btn_disabled'}` 
  );

  const saveProfileOn = ( 
    `profile__btn-save ${saveInfo && 'profile__btn-save_active'} ${!saveInfo && 'profile__btn-save_disabled'}` 
  );

  return (
    <>
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}
      />
      <main>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, Александр!</h1>
            <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="profile__form">
              
              <label className="profile__field profile__field_interval-bottom">
                Имя
                <input 
                  type="text" 
                  // value="name"/*{name || ''}*/
                  defaultValue="Name"
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
                E-mail
                <input 
                  type="email" 
                  placeholder="Email" 
                  // value="email@email.ru"/*{email}*/
                  defaultValue="Email"
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

              {saveInfo === false && <button onClick={editStatusProfileOnSave} type="button" className={saveProfileOff}>Редактировать</button>}

              {saveInfo === false && <button onClick={navigateToMain} type="button" className="profile__btn-exit">Выйти из аккаунта</button>}

              {saveInfo === true && <button onClick={editStatusProfileOffSave}  type="submit" className={saveProfileOn}>Сохранить</button>}

            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;