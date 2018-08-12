import React from 'react';
import GoogleMap from '../GoogleMaps';

class App extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen">
         <GoogleMap />
      </div>
    );
  }
}

export default App;
