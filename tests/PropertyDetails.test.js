import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PropertyDetails from '../src/components/PropertyDetails';
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
  img1: '/img1.jpg',
  img2: '/img2.jpg',
  img3: '/img3.jpg',
  floorMap: '/floor.jpg',
  map: 'https://www.google.com/maps/embed?pb=test',
  tenure: 'Freehold',
  added: { month: 'January', day: 1, year: 2026 }
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ properties: [mockProperty] }),
  })
);

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

describe('PropertyDetails Component', () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

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

  test('switches between tabs correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    // Test Floor Plan tab
    const floorPlanTab = await screen.findByText(/Floor Plan/i);
    fireEvent.click(floorPlanTab);
    expect(screen.getByText(/No floor plan available/i)).toBeInTheDocument();

    // Test Map tab
    const mapTab = screen.getByText(/Map/i);
    fireEvent.click(mapTab);
    const iframe = screen.getByTitle(/Property Map/i);
    expect(iframe).toBeInTheDocument();

    // Test Description tab
    const descriptionTab = screen.getByText(/Description/i);
    fireEvent.click(descriptionTab);
    expect(screen.getByText(/A beautiful property/i)).toBeInTheDocument();
  });

  test('opens and closes gallery modal', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/View All Images/i)).toBeInTheDocument();
    });

    const viewAllButton = screen.getByText(/View All Images/i);
    fireEvent.click(viewAllButton);

    await waitFor(() => {
      expect(screen.getByLabelText(/Close gallery/i)).toBeInTheDocument();
    });

    const closeButton = screen.getByLabelText(/Close gallery/i);
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByLabelText(/Close gallery/i)).not.toBeInTheDocument();
    });
  });

  test('adds property to favourites when button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Add to Favourites/i)).toBeInTheDocument();
    });

    const favouriteButton = screen.getByText(/Add to Favourites/i);
    fireEvent.click(favouriteButton);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalled();
      const callArgs = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
      expect(callArgs).toHaveLength(1);
      expect(callArgs[0].id).toBe('prop1');
    });
  });

  test('removes property from favourites when already favourited', async () => {
    // Set initial favourites
    localStorageMock.setItem('favourites', JSON.stringify([mockProperty]));
    localStorageMock.getItem.mockReturnValue(JSON.stringify([mockProperty]));
    
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Favourited/i)).toBeInTheDocument();
    });

    const favouriteButton = screen.getByText(/Favourited/i);
    fireEvent.click(favouriteButton);

    await waitFor(() => {
      const setItemCalls = localStorageMock.setItem.mock.calls;
      const lastCall = setItemCalls[setItemCalls.length - 1];
      const favourites = JSON.parse(lastCall[1]);
      expect(favourites).toHaveLength(0);
    });
  });

  test('navigates images in gallery using thumbnails', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const thumbnails = screen.getAllByAltText(/Thumbnail/i);
      expect(thumbnails.length).toBeGreaterThan(0);
    });

    const thumbnails = screen.getAllByAltText(/Thumbnail/i);
    if (thumbnails.length > 1) {
      fireEvent.click(thumbnails[1]);
      // The active thumbnail should have the active class
      await waitFor(() => {
        expect(thumbnails[1].parentElement).toHaveClass('active');
      });
    }
  });

  test('displays property information correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/property/prop1']}>
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/House/i)).toBeInTheDocument();
      expect(screen.getByText(/Colombo 7/i)).toBeInTheDocument();
      expect(screen.getByText(/£500,000/i)).toBeInTheDocument();
      expect(screen.getByText(/Freehold/i)).toBeInTheDocument();
    });
  });
});
