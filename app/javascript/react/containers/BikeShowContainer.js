import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';
import ReviewTile from '../components/ReviewTile';
import FormContainer from './FormContainer';
class BikeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {},
      reviews: []
    }
    this.addSubmission = this.addSubmission.bind(this)
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

  render() {
    let reviews = this.state.reviews.map(review => {

      return(
        <ReviewTile
          email={review.user_email}
          key={review.id}
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
          bike_id={this.state.bike.id}
          addSubmission = {this.addSubmission}
          />
      </div>
    )
  }
}

export default BikeShowContainer;
