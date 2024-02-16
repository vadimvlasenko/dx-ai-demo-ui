import React, { Component } from 'react';
import './BadgesDashboard.css';

class BadgesDashboard extends Component {
  state = {
    badges: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    fetch('https://dx-ai-demo-app.eks-sandbox.aws.main.edp.projects.epam.com/badges')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => this.setState({ badges: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderBadge = (badge) => {
    return (
      <div className="badge" key={badge.badgeId} onClick={() => this.showBadgeDetails(badge)}>
        <img src={badge.badgeImage} alt={badge.badgeName} />
        <h3>{badge.badgeName}</h3>
        <p>{badge.description}</p>
      </div>
    );
  };

  showBadgeDetails = (badge) => {
    // logic to show badge details
  };

  render() {
    const { badges, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="badges-dashboard">
        {badges.map(this.renderBadge)}
      </div>
    );
  }
}

export default BadgesDashboard;
