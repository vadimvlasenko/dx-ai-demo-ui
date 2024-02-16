import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = { badges: [] };

  componentDidMount() {
    fetch('http://localhost:8080/badges')
      .then(response => response.json())
      .then(data => this.setState({ badges: data }));
  }

  render() {
    const { badges } = this.state;
    return (
      <div className='badges-dashboard'>
        {badges.map(badge => (
          <div key={badge.badgeId} className='badge'>
            <img src={badge.badgeImage} alt={badge.badgeName} className='badge-image'/>
            <h3>{badge.badgeName}</h3>
            <p>ID: {badge.badgeId}</p>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;
