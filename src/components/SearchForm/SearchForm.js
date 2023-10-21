import React from "react";
import button from "./../../images/button.svg";
import arrowbutton from "./../../images/arrowButton.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox"
import { useFormValidation } from "../../hooks/useFormValidation";

function SearchForm({ chengeCheckbox, onClickSearch, checked }) {
  const {values, errors, isValid, handleChange } = useFormValidation();

  const handleSubmit = (e) => {  
    e.preventDefault();
    onClickSearch(values.film)
  }

  return (
      <section className="search-form">
        <form onSubmit = {handleSubmit} action="/apply/" autoComplete="on" method="POST" name="#" className="search-form__form">
          <div className="search-form__box">
            <label className="search-form__field">
              <input 
                type="text" 
                value={values.film || ''}
                placeholder="Фильм" 
                name="film" 
                id="name-input" 
                className="search-form__element search-form__element_key_name" 
                required 
                //minLength="2" 
                // maxLength="40"                
                // onChange = {evt => setFilmRequest(evt.target.value)}
                onChange = { handleChange }
              />            
            </label>
            <span className="profileName-input-error register__input-error register__input-error_center">
              {errors.film ? `Введите ключевое слово` : ''}
            </span>
          </div>

          <button type="submit" className="search-form__btn" disabled={!isValid}>
              <img src={button} alt="Кнопка поиска" className ="search-form__button"/>
              <img src={arrowbutton} alt="Кнопка поиска" className ="search-form__arrow"/>
          </button>
          
          <FilterCheckbox 
            chengeCheckbox={chengeCheckbox}
            checked={checked}
          />

        </form>     
      </section>
  )
}

export default SearchForm;