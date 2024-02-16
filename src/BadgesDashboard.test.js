import React from 'react';
import ReactDOM from 'react-dom';
import BadgesDashboard from './BadgesDashboard';

it('renders BadgesDashboard without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgesDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});