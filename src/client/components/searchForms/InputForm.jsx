import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

const InputForm = ({dataType, value, update}) => {
  return (
    <div className="form-group row">
      <label 
        htmlFor="example-text-input" 
        className="col-2 col-form-label">{dataType} Information</label>
      <div className="col-10">
        <input 
          className="form-control" 
          type="text" 
          value={value}
          onChange={update}
          id="example-text-input"/>
      </div>
    </div>
  )
}

export default InputForm;