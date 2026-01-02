import { render, screen, fireEvent } from '@testing-library/react';
import PropertyDetails from '../PropertyDetails';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const mockProperty = {
  id: 'prop1',
  type: 'House',
  location: 'Colombo 7',
  price: 500000,
  bedrooms: 3,
  bathrooms: 2,
  area: 1200,
  description: 'A beautiful property',
  picture: '/1.jpg',
  added: { month: 'January', day: 1, year: 2026 }
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ properties: [mockProperty] }),
  })
);

describe('PropertyDetails Component', () => {
  test('renders property description', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );
    expect(await screen.findByText(/A beautiful property/i)).toBeInTheDocument();
  });

  test('switches tabs', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    const floorPlanTab = await screen.findByText(/Floor Plan/i);
    fireEvent.click(floorPlanTab);
    expect(screen.getByText(/No floor plan available/i)).toBeInTheDocument();
  });
});
