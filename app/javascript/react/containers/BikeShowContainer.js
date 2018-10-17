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
      .catch(error => console.error(`error in fetch: ${error.message}`))
  }


  render() {
    return(
    <div>
      <BikeShow
        id={this.state.bike.id}
        make={this.state.bike.make}
        model={this.state.bike.model}
        year={this.state.bike.year}
        code={this.state.bike.code}
      />
      <h3>jhh</h3>
      </div>
    )
  }
}

export default BikeShowContainer;
