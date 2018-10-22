import React, { Component } from 'react';
import TextField from '../components/TextField'
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      current_user: {}
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

componentDidMount() {
  fetch(`/api/v1/users`)
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
        current_user: body
      })
    })
    .catch(error => console.error('Error:', error));
  }

handleDescriptionChange(event) {
  this.setState({body: event.target.value})
}
handleRatingChange(event) {
  this.setState({rating: event.target.value})
}
handleSubmit(event){
  event.preventDefault()
  let createdReview;
  createdReview = {
    body: this.state.body,
    rating: this.state.rating,
    user_email: this.state.current_user.email,
    bike_id: this.props.bike_id,
    user_id: this.state.current_user.id
  }
  this.props.addSubmission(createdReview)
  this.setState({body: "", rating: ""})
}

render() {
  return (
    <form className="callout" onSubmit={this.handleSubmit}>
      <TextField
        label = "Written Review of Bike"
        content = {this.state.body}
        handleChange = {this.handleDescriptionChange}
        name="description"
      />
      <TextField
        label = "Rating of Bike"
        content = {this.state.rating}
        handleChange = {this.handleRatingChange}
        name="rating"
      />
      <input type="submit" className="button" value="Submit "/>
    </form>
    )
  }
}
export default FormContainer
