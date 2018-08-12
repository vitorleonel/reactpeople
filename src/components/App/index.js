import React from 'react';
import GoogleMap from '../GoogleMaps';
import Navbar from '../Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen">
         <GoogleMap />
         <Navbar />
      </div>
    );
  }
}

export default App;
