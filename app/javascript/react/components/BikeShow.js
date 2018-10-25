import React from 'react';

const BikeShow = (props) => {
  return (
    <div>
      <div className = "bike-tile" key={props.id}>
        <div>
          <img className="bike-image" src={props.image} width="400"/>
        </div>
        <h2 className="model">{props.model}</h2>
        <h3 className="year">{props.year}</h3>
        <h3 className="code">{props.code}</h3>
        </div>
        <h3>Reviews!</h3>
      </div>
  )
}

export default BikeShow;
