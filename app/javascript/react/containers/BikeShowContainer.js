import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';
import ReviewTile from '../components/ReviewTile';
import FormContainer from './FormContainer';
class BikeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {},
      reviews: [],
      current_user: {}
    }
    this.addSubmission = this.addSubmission.bind(this)
    this.getCurrentUser = this.getCurrentUser.bind(this)
    this.checkAdmin = this.checkAdmin.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/bikes/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
      .then(response => response.json())
      .then(body => {
        this.setState({
          bike: body.bike,
          reviews: body.bike.reviews
      });
    })
    .catch(error => console.error('Error:', error));
  }

  handleDelete(id){
    event.preventDefault()
    fetch(`/api/v1/reviews/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      let newReviews = this.state.reviews.filter(review => review.id != response.review_id)
      this.setState({reviews: newReviews})
    })
  }

  getCurrentUser(payload){
    this.setState({current_user: payload})
  }

  checkAdmin(){
    return this.state.current_user.admin
  }

  addSubmission(submission) {
    fetch('/api/v1/reviews', {
      credentials: 'same-origin',
      method: "post",
      body: JSON.stringify(submission),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      alert("Success!")
      this.setState({reviews: this.state.reviews.concat(body.review)})
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let handleDelete;
    let reviews = this.state.reviews.map(review => {

      let deleteReview = () => {
        if (confirm("Are you sure you want to delete this review?")){
          this.handleDelete(review.id)
        }
      }

      return(
        <ReviewTile
          email={review.user_email}
          key={review.id}
          user_id={review.user_id}
          body={review.body}
          rating={review.rating}
          created_at={review.created_at}
          checkAdmin={this.checkAdmin}
          deleteReview={deleteReview}
          current_user={this.state.current_user}
        />
      )
    })
    return(
      <div>
        <BikeShow
          key={this.state.bike.id}
          make={this.state.bike.make}
          model={this.state.bike.model}
          year={this.state.bike.year}
          code={this.state.bike.code}
        />
        {reviews}
        <FormContainer
          getCurrentUser={this.getCurrentUser}
          bike_id={this.state.bike.id}
          addSubmission = {this.addSubmission}
          />
      </div>
    )
  }
}

export default BikeShowContainer;
