import React from 'react';

const BikeShow = (props) => {
  return (
    <div>
      <br/>
      <h3>Model: {props.model} -- Make: {props.make}</h3>
      <h3>Year: {props.year}</h3>
      <h3>{props.code}</h3>
      <h2>{props.model}</h2>
      <h3>{props.make}</h3>
      <h3>{props.year}</h3>
      <h3>{props.code}</h3>

      <h3>Reviews!</h3>
 show_page
    </div>
  )

}

export default BikeShow;
