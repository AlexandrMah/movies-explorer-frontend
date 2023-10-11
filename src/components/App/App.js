import React from "react";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <div className="root">
      <Routes>
        <Route path="/" element={<Main 
          navigateToMain={navigateToMain}
          closePopups={closePopups}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          handleClickAddPlace={handleClickAddPlace}
        />} />
        <Route path="/movies" element={<Movies 
          navigateToMain={navigateToMain}
          closePopups={closePopups}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          handleClickAddPlace={handleClickAddPlace}
        />} />
        <Route path="/saved-movies" element={<SavedMovies 
          navigateToMain={navigateToMain}
          closePopups={closePopups}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          handleClickAddPlace={handleClickAddPlace}
        />} />
        <Route path="/profile" element={<Profile 
          navigateToMain={navigateToMain}
          closePopups={closePopups}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          handleClickAddPlace={handleClickAddPlace}
        />} />
        <Route path="/signin" element={<Login 
          signUp={signUp}
          navigateToMain={navigateToMain}
        />} />
        <Route path="/signup" element={<Register 
          signIn={signIn}
          navigateToMain={navigateToMain}
        />} />
        <Route path="*" element={<NotFound 
          navigateToMain={navigateToMain}
        />} />
      </Routes>     

    </div>
  );
}

export default App;
