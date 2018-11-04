import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';

const MainMap = () => (
  <Map center={[10.0553069, -46.1424186]} zoom={4} zoomControl={false} style={{height: '100vh'}}>
    <TileLayer
      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
    />
    <ZoomControl position="bottomright" />
  </Map>
);

export default MainMap;
