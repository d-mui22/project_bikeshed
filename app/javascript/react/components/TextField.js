import React, { Component } from 'react'

const TextField = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.label}</label>
    <input
      type="text"
      className="textField"
      name={props.name}
      value={props.content}
      onChange={props.handleChange}
      />
  </div>
  )
}

export default TextField;
