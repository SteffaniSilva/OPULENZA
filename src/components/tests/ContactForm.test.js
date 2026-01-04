import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import ContactForm from '../src/ContactForm';

// Wrapper to simulate router context since ContactForm uses useLocation
const Wrapper = ({ children }) => (
  <MemoryRouter initialEntries={['/?agent=TestAgent']}>{children}</MemoryRouter>
);

describe('ContactForm Component', () => {
  test('Test 3: Displays validation error for invalid email format', () => {
    render(
      <Wrapper>
        <ContactForm />
      </Wrapper>
    );

    // Fill in name but use invalid email
    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Email Address/i);
    const messageInput = screen.getByLabelText(/Your Message/i);
    const submitBtn = screen.getByRole('button', { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } }); // Invalid
    fireEvent.change(messageInput, { target: { value: 'Hello there' } });

    fireEvent.click(submitBtn);

    // Check for error text
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
  });

  test('Test 4: Shows success message upon valid submission', async () => {
    render(
      <Wrapper>
        <ContactForm />
      </Wrapper>
    );

    // Fill valid data
    fireEvent.change(screen.getByLabelText(/Your Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '0771234567' } });
    fireEvent.change(screen.getByLabelText(/Your Message/i), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }));

    // Wait for the simulated API call (setTimeout in code)
    await waitFor(() => {
      expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
      expect(screen.getByText(/Your message to TestAgent has been sent/i)).toBeInTheDocument();
    });
  });
});