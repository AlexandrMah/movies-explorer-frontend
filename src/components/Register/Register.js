import React from "react";
import Logo from "../Logo/Logo";
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  function signIn() {
    navigate('/signin');
  }

  return (
      <section className="register">
        < Logo />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="register__form">
          <label className="register__field">
            <p className="register__input-name">Имя</p>
            <input 
              type="text" 
              value="name"/*{name || ''}*/
              placeholder="Имя" 
              name="name" 
              id="name-input" 
              className="register__element register__element_key_name" 
              required 
              minLength="2" 
              maxLength="40"
              // onChange = {evt => setName(evt.target.value)}
            />
            <span className="profileName-input-error register__input-error"></span>
          </label>
          
          <label className="register__field">
            <p className="register__input-name">E-mail</p>
            <input 
              type="email" 
              placeholder="Email" 
              value="email@email.ru"/*{email}*/
              name="email" 
              id="email-input" 
              className="register__element register__element_key_name" 
              required 
              minLength="2" 
              maxLength="30"
              /*onChange = {evt => setEmail(evt.target.value)}*/
            />
            <span className="name-input-error register__input-error"></span>
          </label>
          
          <label className="register__field register__field_indent">
            <p className="register__input-name">Пароль</p>
            <input 
              type="password" 
              placeholder="Пароль" 
              value="12345"/*{password}*/
              name="password" 
              id="password-input" 
              className="register__element register__element_key_img" 
              required
              // onChange = {evt => setPassword(evt.target.value)}
            />
            <span className="url-input-error register__input-error"></span>
          </label>

          <button type="submit" className="register__btn">Зарегистрироваться</button>
          <div className="register__input">
            <p className="register__input-title">Уже зарегистрированы?</p>
            <button onClick={signIn} type="button" className="register__btn-input">Войти</button>
          </div>
        </form>     
      </section>
  )
}

export default Register;