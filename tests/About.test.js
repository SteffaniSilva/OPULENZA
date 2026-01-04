import { render, screen } from '@testing-library/react';
import About from '../src/components/About';

describe('About Component', () => {
  test('renders all headings', () => {
    render(<About />);
    expect(screen.getByText(/WHAT IS OPULENZA/i)).toBeInTheDocument();
    expect(screen.getByText(/OUR MISSION/i)).toBeInTheDocument();
    expect(screen.getByText(/OUR GOAL/i)).toBeInTheDocument();
  });

  test('renders images with alt text', () => {
    render(<About />);
    expect(screen.getByAltText(/Opulenza property/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Opulenza mission/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Opulenza goal/i)).toBeInTheDocument();
  });
});

