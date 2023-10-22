import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import InfoTooltip from "./../Popup/Popup";

function Profile({ navigateToMain, closePopups, isAddPlacePopupOpen, handleClickAddPlace, signUserOut, handleUpdateUser, changeProfileStatus, isStatusChangeProfilePopupOpen }) {
  const currentUser = React.useContext(CurrentUserContext);
  const {values, errors, isValid, setValues, handleChange, setIsValid} = useFormValidation();
  
  const [saveInfo, setSaveInfo] = React.useState(false);
  const [inputActive, setInputActive] = React.useState(true);
  const [createInfo, setCreateInfo] = React.useState(false);

  React.useEffect(() =>{ 
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    })
  }, [currentUser, setValues])

  React.useEffect(() => {
    if (!isValid || (currentUser.name === values.name && currentUser.email === values.email)) {
      setCreateInfo(true);
    } else {
      setCreateInfo(false);
    }
  }, [setIsValid, values, currentUser])


  function editStatusProfileOnSave(){
    setSaveInfo(true);
    setInputActive(false);
  }

  function editStatusProfileSave (e){
    e.preventDefault();
    handleUpdateUser(values.name , values.email)
    setSaveInfo(false);
    setInputActive(true);
  }

  const saveProfileOff = ( 
    `profile__btn ${!saveInfo && 'profile__btn_active'} ${saveInfo && 'profile__btn_disabled'}` 
  );

  const saveProfileOn = ( 
    `profile__btn-save ${!isValid && saveInfo && 'profile__btn-save_active'} ${isValid && !saveInfo && 'profile__btn-save_disabled'} ${isValid && !createInfo && 'profile__btn-save_create-info'}` 
  );

  return (
    <>
      <InfoTooltip 
        changeProfileStatus={changeProfileStatus}
        isStatusChangeProfilePopupOpen={isStatusChangeProfilePopupOpen}
        closePopups={closePopups}
      />
      <Header 
        navigateToMain={navigateToMain}
        closePopups={closePopups}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        handleClickAddPlace={handleClickAddPlace}
      />
      <main>
        <section className="profile">

          <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name}!</h1>
            <form action="/apply/" method="POST" name="#" className="profile__form">
              
              <label className="profile__field profile__field_interval-bottom">
                Имя
                <input 
                  type="text" 
                  value={values.name || ''}/*{name || ''}*/
                  placeholder="Имя" 
                  name="name" 
                  id="name-input" 
                  className="profile__element profile__element_key_name" 
                  required 
                  minLength="2" 
                  maxLength="30"
                  pattern="[a-zA-Zа-яёА-ЯЁ\s\-]+"
                  onChange = {handleChange}/*{evt => setName(evt.target.value)}*/
                  disabled={inputActive}
                />
                <span className="register__input-error register__input-error_center profile-input-error">
                  {errors.name ? 'Имя должно быть заполнено и может содержать только латиницу, кириллицу, пробел и дефис' : ''}
                </span>           
              </label>
              

              <label className="profile__field profile__field_line">
                E-mail
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={values.email || ''}/*{email || ''}*/
                  name="email" 
                  id="email-input" 
                  className="profile__element profile__element_key_name" 
                  required 
                  minLength="2" 
                  maxLength="30"
                  pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$"/*"^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"*/
                  onChange = {handleChange} /*{evt => setEmail(evt.target.value)}*/
                  disabled={inputActive}
                />
                <span className="register__input-error register__input-error_center profile-input-error">
                  {errors.email || ''}
                </span>
              </label>
              

              {saveInfo === false && <button onClick={editStatusProfileOnSave} type="button" className={saveProfileOff}>Редактировать</button>}

              {saveInfo === false && <button onClick={signUserOut} type="button" className="profile__btn-exit">Выйти из аккаунта</button>}

              {saveInfo === true && <button onClick={editStatusProfileSave} disabled={createInfo}  type="submit" className={saveProfileOn}>Сохранить</button>}

            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile;