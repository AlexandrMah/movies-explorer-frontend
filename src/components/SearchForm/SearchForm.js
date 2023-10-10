import React from "react";
import button from "./../../images/button.svg";
import arrowbutton from "./../../images/arrowButton.svg";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox"

function SearchForm() {

  return (
      <section className="search-form">
        <form /*onSubmit = {handleSubmit}*/ action="/apply/" method="POST" name="#" className="search-form__form">
          
          <label className="search-form__field">
            <input 
              type="text" 
              // value="Фильм"/*{name || ''}*/
              defaultValue="Фильм"
              placeholder="Фильм" 
              name="film" 
              id="name-input" 
              className="search-form__element search-form__element_key_name" 
              required 
              minLength="2" 
              maxLength="40"
              // onChange = {evt => setName(evt.target.value)}
            />            
          </label>
          <span className="profileName-input-error search-form__input-error"></span>          

          <button type="submit" className="search-form__btn">
              <img src={button} alt="Кнопка поиска" className ="search-form__button"/>
              <img src={arrowbutton} alt="Кнопка поиска" className ="search-form__arrow"/>
          </button>
          
          <FilterCheckbox />

        </form>     
      </section>
  )
}

export default SearchForm;