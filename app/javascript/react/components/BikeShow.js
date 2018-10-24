import React from 'react';

const BikeShow = (props) => {
  return (
    <div key={props.id}>
      <h2 className="model">{props.model}</h2>
      <h3 className="make">{props.make}</h3>
      <h3 className="year">{props.year}</h3>
      <h3 className="code">{props.code}</h3>

      <h3>Reviews!</h3>
    </div>
  )

}

export default BikeShow;
