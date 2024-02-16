import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    selectedBadge: null,
  };

  componentDidMount() {
    fetch('http://localhost:8080/badges')
      .then(response => response.json())
      .then(data => this.setState({ badges: data }))
      .catch(error => console.error('Error fetching badges:', error));
  }

  selectBadge = (badge) => {
    this.setState({ selectedBadge: badge });
  };

  render() {
    const { badges, selectedBadge } = this.state;
    return (
      <div className="badges-dashboard">
        <h2>User Badges</h2>
        <div className="badges-list">
          {badges.map(badge => (
            <div key={badge.badgeId} className="badge" onClick={() => this.selectBadge(badge)}>
              <img src={badge.badgeImage} alt={badge.badgeName} />
              <div className="badge-info">
                <h3>{badge.badgeName}</h3>
                <p>{badge.pointsRequired} points</p>
              </div>
            </div>
          ))}
        </div>
        {selectedBadge && (
          <div className="badge-details">
            <h3>{selectedBadge.badgeName}</h3>
            <img src={selectedBadge.badgeImage} alt={selectedBadge.badgeName} />
            <p>{selectedBadge.description}</p>
            <p>Awarded on: {new Date(selectedBadge.createDate).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    );
  }
}

export default BadgesDashboard;
