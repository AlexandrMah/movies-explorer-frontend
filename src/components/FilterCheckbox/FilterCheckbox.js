import React from "react";

function FilterCheckbox({ chengeCheckbox, checked, isChengeCheckbox }) {

  function onClickCheckbox(e) {
    chengeCheckbox(e);
    isChengeCheckbox();
  }

  return (
    <div className="box">
      <label className={`box__filter
        ${checked === 'on' ? 'box__filter_active' : null}`
        }>
          <input className='box__radio box__radio_off'
            type='radio'
            name='checked'
            value='off'
            checked={checked === 'off' ? true : false}
            onChange={onClickCheckbox}
          />
          <input className='box__radio box__radio_on'
            type='radio'
            name='checked'
            value='on'
            checked={checked === 'on' ? true : false}
            onChange={onClickCheckbox}
          />
          <span className='box__switch'></span>
      </label>
      <h3 className="box__text">Короткометражки</h3>
    </div>
  )
}
  
export default FilterCheckbox;