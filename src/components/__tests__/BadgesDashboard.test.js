import React from 'react';
import { render, waitFor } from '@testing-library/react';
import BadgesDashboard from '../BadgesDashboard';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ badgeId: '1', badgeName: 'Test Badge', description: 'A test badge', badgeImage: 'test-image.png' }]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it('renders the BadgesDashboard and fetches badges', async () => {
  const { getByText } = render(<BadgesDashboard />);
  await waitFor(() => expect(getByText('Test Badge')).toBeInTheDocument());
});