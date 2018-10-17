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
      email: ""
    }
    this.addSubmission = this.addSubmission.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/bikes/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({bike: body.bike});
      })
    fetch(`/api/v1/reviews/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({reviews: body.reviews})
      })
  }

  addSubmission(submission) {

    this.setState({reviews: this.state.reviews.concat(submission)})
    fetch ('/api/v1/reviews', {
      credentials: 'same-origin',
      method: "post",
      body: JSON.stringify(submission),
      headers: { 'Content-Type': 'application/json' }
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
      this.setState({email: body.reviews.email})
    })
    .catch(error => console.error('Error:', error));
  }

  render() {
    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
          statefulEmail={this.state.email}
          email={review.user_email}
          id={review.id}
          user_id={review.user_id}
          body={review.body}
          rating={review.rating}
          created_at={review.created_at}
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
          bike_id= {this.state.bike.id}
          id = {this.props.params.id}
          addSubmission = {this.addSubmission}
          />
      </div>
    )
  }
}

export default BikeShowContainer;
