import React from "react";
import Logo from "./../Logo/Logo";
import { useFormValidation } from "../../hooks/useFormValidation";

function Register({ signIn, navigateToMain, onRegister }) {

  //Валидация
  const { values, errors, isValid, handleChange } = useFormValidation();

  //Отправка данных при регистрации
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password)
  };

  const buttonRegister = `register__btn ${!isValid && 'register__btn_inactive'}`;

  return (
    <main>
      <section className="register">
        < Logo 
          signIn={signIn}
          navigateToMain={navigateToMain}
        />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form onSubmit = {handleSubmit} action="/apply/" method="POST" name="#" className="register__form">
          <p className="register__input-name">Имя</p>
          <label className="register__field">            
            <input 
              type="text" 
              value={values.name || ''}
              placeholder="Имя" 
              name="name" 
              id="name-input" 
              className="register__element register__element_key_name" 
              required 
              minLength="2" 
              maxLength="40"
              pattern="[a-zA-Zа-яёА-ЯЁ\s\-]+"
              // onChange = {evt => setName(evt.target.value)}
              onChange = { handleChange }
            />
            <span className="name-input-error register__input-error">
              {errors.name ? `Поле должно быть заполнено. Текст должен быть не короче 2 символов. Можно вводить русские и латинские буквы, пробел и дефис` : ''}
            </span>
          </label>
          
          <p className="register__input-name">E-mail</p>
          <label className="register__field">            
            <input 
              type="email" 
              placeholder="Email" 
              value={values.email || ""}
              name="email" 
              id="email-input" 
              className="register__element register__element_key_name" 
              required 
              minLength="2" 
              maxLength="30"
              pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
              // onChange = {evt => setEmail(evt.target.value)}
              onChange = { handleChange }
            />
            <span className="email-input-error register__input-error">
              {errors.email || ''}
            </span>
          </label>
          
          <p className="register__input-name">Пароль</p>
          <label className="register__field register__field_indent">
            <input 
              type="password" 
              placeholder="Пароль" 
              value={values.password || ''}
              name="password" 
              id="password-input" 
              className="register__element register__element_key_img" 
              required
              minLength="8"
              // onChange = {evt => setPassword(evt.target.value)}
              onChange = { handleChange }
            />
            <span className="password-input-error register__input-error">
              {errors.password || ''}
            </span>
          </label>

          <button type="submit" className={buttonRegister} disabled={!isValid}>Зарегистрироваться</button>
          <div className="register__input">
            <p className="register__input-title">Уже зарегистрированы?</p>
            <button onClick={signIn} type="button" className="register__btn-input">Войти</button>
          </div>
        </form>     
      </section>
    </main>
  )
}

export default Register;