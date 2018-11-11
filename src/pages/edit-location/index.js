import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Message, Button } from './styles';

class EditLocation extends Component {
  newLocationHandler = () => {
    if(!this.props.markerLocation)
      return;

    console.log(this.props.markerLocation);
  }

  render() {
    return <Container>
      <Message>
        {
          !this.props.markerLocation
            ? 'Click on the map for set your new location'
            : 'This is your new location?'
        }
      </Message>

      { this.props.markerLocation ? <Button>Save</Button> : null }
    </Container>
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch({ type: 'SET_LOCATION', payload: location }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation);
