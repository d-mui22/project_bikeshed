import React from 'react';

const ReviewTile = (props) => {
  return (
    <div key={props.id}>
      <h6> {props.email}{props.statefulEmail}</h6>
      <p> {props.body} - {props.rating} stars</p>
    </div>
  )

}

export default ReviewTile;
