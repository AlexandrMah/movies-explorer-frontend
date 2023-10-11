import React from "react";
import Logo from "./../Logo/Logo";
// import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

function Register({ signIn, navigateToMain }) {
  // const [name, setName] = React.useState('Name');
  // const [email, setEmail] = React.useState('Email');

   // Подписка на контекст
  //  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  // React.useEffect(() => {
  //   setName(currentUser.name);
  //   setEmail(currentUser.email);
  // }, [currentUser/*, isOpen*/]);

  return (
    <main>
      <section className="register">
        < Logo 
          signIn={signIn}
          navigateToMain={navigateToMain}
        />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="register__form">
          <p className="register__input-name">Имя</p>
          <label className="register__field">            
            <input 
              type="text" 
              // value="name"/*{name || 'Name'}*/
              defaultValue="Name"
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
          
          <p className="register__input-name">E-mail</p>
          <label className="register__field">            
            <input 
              type="email" 
              placeholder="Email" 
              // value="Email" /*{email || "Email"}*/
              defaultValue="Email"
              name="email" 
              id="email-input" 
              className="register__element register__element_key_name" 
              required 
              minLength="2" 
              maxLength="30"
              /* onChange = {evt => setEmail(evt.target.value)}*/
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
              // readonly
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
    </main>
  )
}

export default Register;