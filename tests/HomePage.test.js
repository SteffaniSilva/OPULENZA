import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';
import { BrowserRouter } from 'react-router-dom';

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe('HomePage Component', () => {
  test('renders hero section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText(/EXCLUSIVE/i)).toBeInTheDocument();
    expect(screen.getByText(/Indulge in luxury apartments living/i)).toBeInTheDocument();
  });

  test('renders gallery images', () => {
    renderWithRouter(<HomePage />);
    const images = screen.getAllByAltText(/Modern Home/i);
    expect(images.length).toBeGreaterThanOrEqual(12);
  });

  test('renders features section', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByText(/Wide Selection/i)).toBeInTheDocument();
    expect(screen.getByText(/Best Prices/i)).toBeInTheDocument();
    expect(screen.getByText(/Expert Agents/i)).toBeInTheDocument();
  });
});
