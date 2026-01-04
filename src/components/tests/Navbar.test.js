import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../src/Navbar';

describe('Navbar Component', () => {
  test('Test 5: Renders all navigation links correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check for the Brand Logo
    expect(screen.getByText('OPULENZA')).toBeInTheDocument();

    // Check for Navigation Links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Browse')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Verify links have correct href attributes (simulating routing)
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');

    const browseLink = screen.getByText('Browse').closest('a');
    expect(browseLink).toHaveAttribute('href', '/search');
  });
});