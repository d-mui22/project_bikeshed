import React, { Component } from 'react';
import TextField from '../components/TextField'
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      current_user_id: "",
      email: ""
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

componentDidMount() {
  fetch(`/api/v1/users/${this.props.id}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        current_user_id: body.users.id,
        email: body.users.email
      })

    })
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
    user_id: this.state.current_user_id,
    bike_id: this.props.bike_id,
    email: this.state.email
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
