import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, EDP!</h1>
        </header>
      </div>
    );
  }
}

import BadgesDashboard from './components/BadgesDashboard';

// ... rest of the App component ...

<main>
  <BadgesDashboard />
</main>

export default App;
