import React from "react";
import Logo from "../Logo/Logo";

function Login({ signUp, navigateToMain }) {

  return (
    <main>
      <section className="register">
        < Logo 
          signUp={signUp}
          navigateToMain={navigateToMain}
        />        
        <h1 className="register__title">Рады видеть!</h1>
        <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="register__form">

          <p className="register__input-name">E-mail</p>
          <label className="register__field">
            <input 
              type="email" 
              placeholder="Email" 
              // value="email@email.ru"/*{email}*/
              defaultValue="Email"
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

          <p className="register__input-name">Пароль</p>
          <label className="register__field register__field_indent">
            <input 
              type="password" 
              placeholder="Пароль" 
              // value="12345"/*{password}*/
              defaultValue="12345"
              name="password" 
              id="password-input" 
              className="register__element register__element_key_img"
              required
              // onChange = {evt => setPassword(evt.target.value)}
            />
            <span className="url-input-error register__input-error"></span>
          </label>

          <button type="submit" className="register__btn register__btn_indent">Войти</button>
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