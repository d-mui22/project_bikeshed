import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';
import ReviewTile from '../components/ReviewTile';
import FormContainer from './FormContainer';

class ReviewShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`/api/v1/bikes/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({
          reviews: body.bike.reviews
        });
    })
  }
  render() {
    let reviews = this.state.reviews.map(review => {
      return(
        <ReviewTile
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
      {reviews}
    )
  }
}

export default ReviewShowContainer
