import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../components/HomePage';


test('renders Home page hero heading', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/EXCLUSIVE APARTMENTS/i)
  ).toBeInTheDocument();
});

test('displays Who Are We section', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  expect(
    screen.getByText(/WHO ARE WE\?/i)
  ).toBeInTheDocument();
});


test('renders gallery images', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  const images = screen.getAllByAltText(/Modern Home/i);
  expect(images.length).toBeGreaterThan(0);
});
