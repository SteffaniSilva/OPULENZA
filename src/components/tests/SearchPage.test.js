import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPage from '../src/SearchPage';

// Mock the properties.json data
const mockProperties = [
  {
    id: '1',
    type: 'House',
    price: 500000,
    bedrooms: 3,
    location: 'London',
    added: { month: 'January', year: 2023 },
    picture: '/1.jpg',
    short: 'Nice house'
  },
  {
    id: '2',
    type: 'Flat',
    price: 1500000,
    bedrooms: 2,
    location: 'Manchester',
    added: { month: 'February', year: 2023 },
    picture: '/2.jpg',
    short: 'Expensive flat'
  }
];

// Mock global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ properties: mockProperties }),
  })
);

describe('SearchPage Component', () => {
  beforeEach(() => {
    // Clear mocks before each test
    fetch.mockClear();
    // Clear local storage to prevent state leaking between tests
    localStorage.clear();
  });

  test('Test 1: Renders all properties initially without filters', async () => {
    render(<SearchPage />);

    // Wait for the mock fetch to complete and state to update
    await waitFor(() => {
      expect(screen.getByText('Nice house')).toBeInTheDocument();
      expect(screen.getByText('Expensive flat')).toBeInTheDocument();
    });
  });

  test('Test 2: Filters properties correctly by Minimum Price', async () => {
    render(<SearchPage />);

    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByText('Nice house')).toBeInTheDocument();
    });

    // Find the Min Price input and type a value
    const minPriceInput = screen.getByLabelText('Min Price (£)');
    fireEvent.change(minPriceInput, { target: { value: '1000000' } });

    // Click the Search button
    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchButton);

    // Assert that only the expensive flat remains (1500000 > 1000000)
    await waitFor(() => {
      expect(screen.queryByText('Nice house')).not.toBeInTheDocument();
      expect(screen.getByText('Expensive flat')).toBeInTheDocument();
    });
  });
});