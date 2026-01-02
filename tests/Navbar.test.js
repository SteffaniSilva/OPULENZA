import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  test('renders all nav links', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Browse/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    render(<BrowserRouter><Navbar /></BrowserRouter>);
    const button = screen.getByLabelText(/Toggle menu/i);
    fireEvent.click(button);
    expect(screen.getByText(/Home/i).parentElement).toHaveClass('mobile-open');
  });
});
