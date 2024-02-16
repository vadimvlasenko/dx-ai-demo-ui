import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    fetch('http://localhost:8080/badges')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch badges');
        }
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, badges, error } = this.state;
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      <div className="badges-dashboard">
        {badges.map(badge => (
          <div key={badge.badgeId} className="badge">
            <img src={badge.badgeImage} alt={badge.badgeName} className="badge-image" />
            <h2 className="badge-name">{badge.badgeName}</h2>
            <p className="badge-description">{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default BadgesDashboard;