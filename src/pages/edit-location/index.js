import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Message, Button } from './styles';
import api from '../../services/api';

class EditLocation extends Component {
  state = {
    loading: false,
  };

  newLocationHandler = async () => {
    if (!this.props.user.location)
      return;

    this.setState({ loading: true });

    try {
      await api.put(`/users/${this.props.user._id}/location`, this.props.markerLocation);

      this.props.history.push('/');
    } catch (error) {}
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

      {
        this.props.markerLocation
          ? <Button onClick={this.newLocationHandler}>{ this.state.loading ? 'Salvando...' : 'Salvar' }</Button>
          : null
      }
    </Container>
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch({ type: 'SET_LOCATION', payload: location }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditLocation);
