import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

class EditLocation extends Component {
  newLocationHandler = () => {
    if(!this.props.markerLocation)
      return;

    console.log(this.props.markerLocation);
  }

  render() {
    return <Container confirm={this.props.markerLocation ? true : false} onClick={this.newLocationHandler}>
      {
        !this.props.markerLocation
          ? 'Click on the map for set your new location'
          : 'Click here to save your new location'
      }
    </Container>
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
});

export default connect(mapStateToProps)(EditLocation);
