import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Map, TileLayer, ZoomControl, Marker } from 'react-leaflet';

class MainMap extends Component {
  newLocationHandler = e => {
    if(!this.props.location.pathname.includes('/profile/edit-your-location'))
      return;

    this.props.setLocation(e.latlng);
  }

  render() {
    return <Map center={[4.5609245, -33.1948357]} zoom={3.5} zoomControl={false} style={{height: '100vh'}} onClick={this.newLocationHandler}>
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
      />

      <ZoomControl position="bottomright" />

      { this.props.markerLocation
        ? <Marker position={this.props.markerLocation} />
        : '' }
    </Map>
  }
}

const mapStateToProps = state => ({
  markerLocation: state.auth.location,
});

const mapDispatchToProps = dispatch => ({
  setLocation: location => dispatch({ type: 'SET_LOCATION', payload: location }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMap));
