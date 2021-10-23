import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';


//BandsContainer is the child of the App component 
class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

export default App;
