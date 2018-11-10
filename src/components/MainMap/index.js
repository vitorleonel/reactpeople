import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

const event = e => {
  console.log(e);
}

const MainMap = () => (
  <Map center={[4.5609245, -33.1948357]} zoom={3.5} zoomControl={false} style={{height: '100vh'}} onClick={e => event(e)}>
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
    />
    <ZoomControl position="bottomright" />
  </Map>
);

export default MainMap;
