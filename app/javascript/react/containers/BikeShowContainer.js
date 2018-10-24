import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';
import ReviewTile from '../components/ReviewTile';
import FormContainer from './FormContainer';
import ReviewShowContainer from './ReviewShowContainer';
import update from 'react-addons-update';

class BikeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {},
      reviews: []
    }
    this.addSubmission = this.addSubmission.bind(this)
    this.addVote = this.addVote.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/bikes/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          bike: body.bike,
          reviews: body.bike.reviews
        });
    })

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
      this.setState({reviews: this.state.reviews.concat(body.reviews)})
    })
    .catch(error => console.error('Error:', error));
  }

  addVote(updatedReview) {
    fetch(`/api/v1/reviews/${updatedReview.id}`, {
      credentials: 'same-origin',
      method: "PATCH",
      body: JSON.stringify(updatedReview),
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
      alert("You Voted!")
      debugger
      let newVote = this.state.reviews.find(x => x.id == body.review.id)
      let index = this.state.reviews.indexOf(newVote)
      let votes = newVote.votes
      votes++
      newVote.votes=votes
      this.setState({
        reviews: update(this.state.reviews, {
          [index]: {
            votes: {
              $set: newVote.votes
            }}})
      })

    })
    .catch(error => console.error('Error:', error));
  }

  handleClick() {

  }
  render() {
    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
          bike_id={this.props.params.id}
          email={review.user_email}
          id={review.id}
          user_id={review.user_id}
          body={review.body}
          rating={review.rating}
          created_at={review.created_at}
          votes={review.votes}
          addVote={this.addVote}
        />
      )
    })
    return(
      <div>
        <BikeShow
          id={this.state.bike.id}
          make={this.state.bike.make}
          model={this.state.bike.model}
          year={this.state.bike.year}
          code={this.state.bike.code}
        />
      {reviews}
        <FormContainer
          bike_id={this.state.bike.id}
          addSubmission = {this.addSubmission}
          />
      </div>
    )
  }
}

export default BikeShowContainer;
