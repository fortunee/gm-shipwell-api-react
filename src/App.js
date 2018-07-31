import React, { Component } from 'react';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageOne />
        <PageTwo />
      </div>
    );
  }
}

export default App;
