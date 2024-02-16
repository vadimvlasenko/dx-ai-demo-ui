import React from 'react';
import { render, screen } from '@testing-library/react';
import BadgesDashboard from '../components/BadgesDashboard';

describe('BadgesDashboard', () => {
  test('renders without crashing', () => {
    render(<BadgesDashboard />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  // Additional tests to confirm functionality
  // e.g., test('displays badge details when a badge is clicked', () => { ... });
});