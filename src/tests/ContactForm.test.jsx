import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';


test('shows validation errors when submitting empty form', () => {
  render(<ContactForm />);

  fireEvent.click(screen.getByText(/Send Message/i));

  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
});
