import React, { Component } from 'react';
import TextField from '../components/TextField'
class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: "",
      current_user: {},
      error: ""
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
    .then(body => {
      this.props.getCurrentUser(this.state.current_user)
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
  if(this.state.current_user.id && this.state.body != "" && this.state.rating != "") {
    createdReview = {
      body: this.state.body,
      rating: this.state.rating,
      user_email: this.state.current_user.email,
      bike_id: this.props.bike_id,
      user_id: this.state.current_user.id
    }
    this.props.addSubmission(createdReview)
    this.setState({body: "", rating: "", error: ""})
  }else if(this.state.body == ""){
    this.setState({error: "Please add a body"})
  }else if(this.state.rating == ""){
    this.setState({error: "Please add a rating"})
  }else{
    this.setState({error: "Please log-in to fill out form!"})
  }
}

render() {
  return (
    <div>
      <h5 className="form_errors">{this.state.error}</h5>
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
    </div>
    )
  }
}
export default FormContainer
