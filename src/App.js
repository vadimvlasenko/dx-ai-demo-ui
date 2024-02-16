import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BadgesDashboard from './components/BadgesDashboard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello, EDP!</h1>
          </header>
          <Route path="/badges" component={BadgesDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
