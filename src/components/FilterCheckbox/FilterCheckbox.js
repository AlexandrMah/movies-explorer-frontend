import React from "react";

function FilterCheckbox() {

  return (
    <div className="box">
      <label className="box__switch">
        <input type="checkbox" />
        <span className="box__slider box__round"></span>
      </label>
      <h3 className="box__text">Короткометражки</h3>
    </div>
  )
}
  
export default FilterCheckbox;