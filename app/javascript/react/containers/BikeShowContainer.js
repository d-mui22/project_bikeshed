import React, { Component } from 'react';
import BikeShow from '../components/BikeShow';

class BikeShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {}
    }
  }

  componentDidMount() {

    fetch(`/api/v1/bikes/${this.props.params.id}`)
      .then(response => response.json())
      .then(body => {
        this.setState({bike: body.bike});
      })
  }


  render() {
    let bike = this.state.bike.bike

    return(
      <BikeShow
        id={this.state.bike.id}
        make={this.state.bike.make}
        model={this.state.bike.model}
        year={this.state.bike.year}
        code={this.state.bike.code}
      />

    )
  }
}

export default BikeShowContainer;
