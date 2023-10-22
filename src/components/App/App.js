import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import { Route, Routes } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
/*-------*/
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";
import * as mainApi from './../../utils/MainApi.js';
import { ProtectedRoute } from "./../ProtectedRoute/ProtectedRoute";
import Preloader from "./../Preloader/Preloader"

function App() {
  const [currentUser,  setCurrentUser] = React.useState({});
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /*--Список сохраненных фильмов--*/
  const [cardsMovies, setCardsMovies] = React.useState([]);

  //Фильтер статус (был ли поиск)
  const filterStatusRes = localStorage.getItem('filterStatus') ? true : false;
  const [filterStatus, setFilterStatus] = React.useState(filterStatusRes);

  //Контроль прелоадера
  const [isLoading, setIsLoading] = React.useState(false);
  /*------------------------------*/
  //Попуп. Статус ответа при изменении профиля (true - все ок)
  const [changeProfileStatus, setChangeProfileStatus] = React.useState(false);

  //Попуп статуса ответа изменения профиля
  const [isStatusChangeProfilePopupOpen, setIsStatusChangeProfilePopupOpen] = React.useState(false);
  
  /*--Попуп навигации---*/
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  /*-----*/
  //Подписка на контекст, информация о пользователе
  React.useEffect(() =>{
    if (!isLoggedIn){
      return;
    } 
    setIsLoading(true)
    mainApi.getInfoUser().then(infoUser => {
      setCurrentUser(
        () =>({
          name: infoUser.name,
          email: infoUser.email,
          _id: infoUser._id,
        })
      )
    })
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }, [isLoggedIn])

  // Проверка токена
  React.useEffect(() => {
    // checkToken();
    // const checkToken = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt === null){
      return
    }
    mainApi.checkToken(jwt)
    .then((data) => {
      if(!data) {
        return
      }
      setLoggedIn(true);
      navigate(location.pathname);
    })
    .catch((err) => {
      console.error(err)
      setLoggedIn(false)
    })
    // }
  }, [])

  //авторизация пользователя
  const onLogin = (email, password) => {
    setIsLoading(true)
    return mainApi.authorize(email, password).then((jwt) => {
      localStorage.setItem("jwt", jwt.token)
      setLoggedIn(true);
      navigate("/movies");
    })
    .catch((err) => console.error(err))
    .finally(() => setIsLoading(false))
  }

  //регистрация пользователя
  const onRegister = (name, email, password) => {
    setIsLoading(true)
    return mainApi.registers(name, email, password).then((res) => { 
      if (res){
        onLogin(res.email, name.password);
      }
      // navigate("/signin");
      return res;
    }).catch((err) => {
      console.error(err);
    })
    .finally(() => setIsLoading(false))
  }

  //редактирование профиля
  function handleUpdateUser(name, email){
    mainApi.editInfoUser({ name: name, email: email })
      .then((info) => {
        setCurrentUser(info)
        setChangeProfileStatus(true)
        setIsStatusChangeProfilePopupOpen(true)
      })
      .catch(err => {
        console.log(err)
        setChangeProfileStatus(false)
        setIsStatusChangeProfilePopupOpen(true);
      })
  }

  // Выход из аккаунта
  function signUserOut(){
    // localStorage.removeItem("jwt");
    window.localStorage.clear()
    setCurrentUser({});
    setLoggedIn(false);
    navigateToMain();
    setFilterStatus(false);
  }
  /*-----*/ 
  //Получение списка сохраненных фильмов
  React.useEffect(() => {
    if (!isLoggedIn){
      return;
    }
    setIsLoading(true)
    mainApi.getSavedMovies()
      .then((data) => {
        localStorage.setItem('savedMovies', JSON.stringify(data));
        setCardsMovies(data);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [isLoggedIn])

  //Сохранение фильма
  function handleAddMovie(data){  
    mainApi.getSaveMovie(data)
      .then((infoCard) => {
        setCardsMovies([infoCard, ...cardsMovies])
      })
      .catch(err => {
        console.log(err)
      })
  }

  //Удаление фильма
  function handleDelMovie(data){
    mainApi.deleteMovie(data._id)
      .then((newMovies) => {
        setCardsMovies((state) => state.filter((c) => c._id !== data._id ));

      })
      .catch(err => {
        setIsLoading(false)
        console.log(err)
      })
  }
  /*---------*/

  //фильтрация короткометражек
  function filterShortMovies(movies){
    return movies.filter((data) => data.duration < 40)
  }

  //функция фильтрации фильмов
  function getListMoviesFilter( list, checked, filterParametr) { 
    setIsLoading(true)
    console.log('11111111111')
    const resultMoviesFilter = list.filter((data) => {
      const nameRuEn = `${data.nameRU} || ${data.nameEN}`.toLowerCase();
      return nameRuEn.includes(filterParametr.toLowerCase());
    })
    if (checked === 'on') {
      setIsLoading(false)
      return filterShortMovies(resultMoviesFilter);
    }
    else {
      setIsLoading(false)
      return resultMoviesFilter;
    }   
  }  

  /*--Попуп навигации---*/
  function handleClickAddPlace(){
    setIsAddPlacePopupOpen(true);
  }

  function signUp() {
    navigate('/signup');
  }

  function signIn() {
    navigate('/signin');
  }

  function navigateToMain() {
    navigate('/');
    closePopups();
  }

  function closePopups(){
    setIsAddPlacePopupOpen(false);
    setIsStatusChangeProfilePopupOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>  
      <div className="root">
        {isLoading ? (
          <Preloader />
        ) : (
        <Routes>
          <Route path="/" element={<Main 
            navigateToMain={navigateToMain}
            closePopups={closePopups}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            handleClickAddPlace={handleClickAddPlace}
            isLoggedIn={isLoggedIn}
          />} />
 
          <Route path="/movies" element={
          <ProtectedRoute 
            element={Movies} 
            navigateToMain={navigateToMain}
            closePopups={closePopups}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            handleClickAddPlace={handleClickAddPlace}
            isLoggedIn={isLoggedIn}
            cardsMovies={cardsMovies}
            handleAddMovie={handleAddMovie}
            handleDelMovie={handleDelMovie}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            getListMoviesFilter={getListMoviesFilter}
          />} />

          <Route path="/saved-movies" element={
          <ProtectedRoute
            element={SavedMovies} 
            navigateToMain={navigateToMain}
            closePopups={closePopups}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            handleClickAddPlace={handleClickAddPlace}
            isLoggedIn={isLoggedIn}
            cardsMovies={cardsMovies}
            handleDelMovie={handleDelMovie}
            filterStatus={filterStatus}
            getListMoviesFilter={getListMoviesFilter}
          />} />

          <Route path="/profile" element={
          <ProtectedRoute
            element={Profile} 
            navigateToMain={navigateToMain}
            closePopups={closePopups}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            handleClickAddPlace={handleClickAddPlace}
            signUserOut={signUserOut}
            isLoggedIn={isLoggedIn}
            handleUpdateUser={handleUpdateUser}
            changeProfileStatus={changeProfileStatus
            }
            isStatusChangeProfilePopupOpen={isStatusChangeProfilePopupOpen}
          />} />

          <Route path="/signin" element={<Login 
            signUp={signUp}
            navigateToMain={navigateToMain}
            onLogin={onLogin}
          />} />

          <Route path="/signup" element={<Register 
            signIn={signIn}
            navigateToMain={navigateToMain}
            onRegister={onRegister}
          />} />

          <Route path="*" element={<NotFound 
            navigateToMain={navigateToMain}
          />} />
        </Routes>
        )}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
