export const BASE_URL = 'https://alexmah.movies.api.nomoredomainsrocks.ru';
// export const BASE_URL = 'http://localhost:3001';

//регистрация
export const registers = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
      name, email, password
    })
  })
    .then(res => getResponseData(res));
};

//авторизация
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => getResponseData(res))
}

//токен
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json', 
      "Authorization" : `Bearer ${token}`,
    },
  })
    .then(res => getResponseData(res));
}

//информация о пользователе
export const getInfoUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
    },
  })
    .then(res => getResponseData(res));
}

  //отправка данных при редактировании профиля
  export const editInfoUser = ({ name, email }) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
      .then(res => getResponseData(res));
  }

  //получение списка сохраненных фильмов
  export const getSavedMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
      },
  })
    .then(res => getResponseData(res));
}

//сохранение фильма
export const getSaveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(data)
})
  .then(res => getResponseData(res));
}

//удаление фильма
export const deleteMovie = (data) => {
  return fetch(`${BASE_URL}/movies/${data}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('jwt')}`,
    },
})
  .then(res => getResponseData(res));
}

/*----Проверка ответа----*/
function getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();}
/*-----*/