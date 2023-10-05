import React from "react";
import Logo from "../Logo/Logo";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  function signUp() {
    navigate('/signup');
  }

  return (
      <section className="register">
        < Logo />        
        <h2 className="register__title">Рады видеть!</h2>
        <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="register__form">
                    
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

          <button type="submit" className="register__btn register__btn_indent">Зарегистрироваться</button>
          <div className="register__input">
            <p className="register__input-title">Ещё не зарегистрированы?</p>
            <button onClick={signUp} type="button" className="register__btn-input">Регистрация</button>
          </div>
        </form>     
      </section>
  )
}

export default Login;