/*import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../src/components/ContactForm';

describe('ContactForm Component', () => {
  test('renders all input fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/Enter your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/How can we help you\?/i)).toBeInTheDocument();
  });

  test('shows error for invalid email', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByText(/Send Your Message/i));
    expect(screen.getByText(/Enter a valid email address/i)).toBeInTheDocument();
  });

  test('accepts only digits in phone input', () => {
    render(<ContactForm />);
    const phoneInput = screen.getByPlaceholderText(/Enter your phone number/i);
    fireEvent.change(phoneInput, { target: { value: 'abc123' } });
    expect(screen.getByText(/Phone number can only contain digits/i)).toBeInTheDocument();
    fireEvent.change(phoneInput, { target: { value: '0712345678' } });
    expect(screen.queryByText(/Phone number can only contain digits/i)).not.toBeInTheDocument();
  });
});*/
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

test('shows validation errors on empty submit', () => {
  render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/Send Message/i));

  expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
});
