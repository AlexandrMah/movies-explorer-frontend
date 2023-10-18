import React from "react";
import Logo from "../Logo/Logo";
import { useFormValidation } from "../../hooks/useFormValidation";

function Login({ signUp, navigateToMain, onLogin }) {  

  //Валидация
  const { values, errors, isValid, handleChange } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin( values.email, values.password )
  };

  const buttonLogin = `register__btn ${!isValid && 'register__btn_inactive'}`;

  return (
    <main>
      <section className="register">
        < Logo 
          signUp={signUp}
          navigateToMain={navigateToMain}
        />        
        <h1 className="register__title">Рады видеть!</h1>
        <form onSubmit = {handleSubmit} action="/apply/" method="POST" name="#" className="register__form">

          <p className="register__input-name">E-mail</p>
          <label className="register__field">
            <input 
              type="email" 
              placeholder="Email" 
              value={values.email || ''}
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
            <span className="name-input-error register__input-error">
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

          <button type="submit" className={buttonLogin} disabled={!isValid}>Войти</button>
          <div className="register__input">
            <p className="register__input-title">Ещё не зарегистрированы?</p>
            <button onClick={signUp} type="button" className="register__btn-input">Регистрация</button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Login;