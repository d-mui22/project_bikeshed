import React from 'react';



const ReviewTile = (props) => {
  let deleteButton
  let editButton

  if(props.checkAdmin() || props.user_id == props.current_user.id){
    deleteButton = <button onClick={props.deleteReview} className="delete">Delete</button>
    editButton = <a href={`/reviews/${props.id}/edit`}className="edit"><button>Edit</button></a>
  }
  
  return (
    <div key={props.id}>
      <h6 className="email"> {props.email}</h6>
      <p className="rating"> {props.body} - {props.rating} stars</p>
      {deleteButton}
      {editButton}
    </div>
  )
}

export default ReviewTile;
