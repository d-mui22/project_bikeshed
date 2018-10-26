import React from 'react';



const ReviewTile = (props) => {
  let deleteButton
  let email = props.email
  let newArr = email.split('@')
  let editButton
  if(props.checkAdmin() || props.user_id == props.current_user.id){
    deleteButton = <i onClick={props.deleteReview} className="fa fa-trash fa-2x delete_button" aria-hidden="true"></i>
    editButton = <a className="edit_button" href={`/reviews/${props.id}/edit`}><i href={`/reviews/${props.id}/edit`} className="far fa-edit fa-2x"></i></a>
  }
  return (
    <div className="review-container" key={props.id}>
      <img className="image-container" src={props.image} width="70" height="70"/>
      <h6 className="email"> {newArr[0]}  {deleteButton} {editButton} </h6>
      <p className="rating"> {props.body} - {props.rating} stars</p>
    </div>
  )
}

export default ReviewTile;
