import React from 'react';



const ReviewTile = (props) => {
  let deleteButton
  let editButton
  if(props.checkAdmin() || props.user_id == props.current_user.id){
    deleteButton = <i onClick={props.deleteReview} className="fa fa-trash fa-2x delete_button" aria-hidden="true"></i>
    editButton = <a className="edit_button" href={`/reviews/${props.id}/edit`}><i href={`/reviews/${props.id}/edit`} className="far fa-edit fa-2x"></i></a>
  }
  return (
    <div className="review-container" key={props.id}>
      <h6 className="email"> {props.email}  {deleteButton} {editButton} </h6>
      <p className="rating"> {props.body} - {props.rating} stars</p>
    </div>
  )
}

export default ReviewTile;
