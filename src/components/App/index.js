import React from 'react';
import GoogleMap from '../GoogleMaps';
import SignIn from '../SignIn';

class App extends React.Component {
  render() {
    return (
      <div className="w-screen h-screen">
         <GoogleMap />
         <SignIn />
      </div>
    );
  }
}

export default App;
