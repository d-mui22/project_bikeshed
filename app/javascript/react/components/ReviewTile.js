import React from 'react';

const ReviewTile = (props) => {
  let onClick

  onClick = () => {
    let newVote = props.votes
    newVote++
    let review = {body: props.body, rating: props.rating, votes: newVote, user_id: props.user_id, bike_id: props.bike_id, email: props.email, id: props.id}
    props.addVote(review)
  }

  let voteButton = <button onClick={onClick}>Vote</button>

  return (
    <div key={props.id}>
      <h6> {props.email}</h6>
      <p className="rating"> {props.body} - {props.rating} stars</p>
      <p>{props.votes}</p>
      {voteButton}
    </div>

  )

}

export default ReviewTile;
