import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = () => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: '' }}
    defaultCenter={{ lat: 15, lng: 0 }}
    defaultZoom={2}
  >
  </GoogleMapReact>
);

export default GoogleMaps;
