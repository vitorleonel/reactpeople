import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map, TileLayer, ZoomControl, Marker } from 'react-leaflet';

import api from '../../services/api';

class MainMap extends Component {
  componentDidMount() {
    this.getUsersHandler();
  }

  getUsersHandler = async () => {
    const { data } = await api.get('/users');

    this.props.setUsers(data.users);
  }

  newLocationHandler = e => {
    if(!window.location.pathname.includes('/profile/edit-your-location'))
      return;

    this.props.setLocation(e.latlng);
  }

  render() {
    return <Map center={[7.5609245, -28.1948357]} zoom={3} zoomControl={false} style={{height: '100vh'}} onClick={this.newLocationHandler}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />

      <ZoomControl position="bottomright" />

      { this.props.markerLocation ? <Marker position={this.props.markerLocation} /> : '' }

      { this.props.users.map(user => <Marker position={[user.location.coordinates[1], user.location.coordinates[0]]} key={user._id} />) }
    </Map>
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch({ type: 'SET_LOCATION', payload: location }),
  setUsers: users => dispatch({ type: 'SET_USERS', payload: users }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMap));
