import React from 'react';

const BikeShow = (props) => {

  return (
    <div>
    <h2>{props.model}</h2>
    <h3>{props.make}</h3>
    <h3>{props.year}</h3>
    <h3>{props.code}</h3>
    </div>
  )

}

export default BikeShow;