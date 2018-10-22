import React from 'react';

const ReviewTile = (props) => {
  return (
    <div key={props.id}>
      <h6 className="email"> {props.email}</h6>
      <p className="rating"> {props.body} - {props.rating} stars</p>
    </div>
  )
}

export default ReviewTile;
