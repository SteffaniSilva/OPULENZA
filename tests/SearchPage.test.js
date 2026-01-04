/*import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchPage from '../src/components/SearchPage';
import { BrowserRouter } from 'react-router-dom';

// Mock fetch for properties.json
const mockProperties = {
  properties: [
    {
      id: 'prop1',
      type: 'House',
      bedrooms: 3,
      bathrooms: 2,
      area: 1200,
      price: 500000,
      location: 'Test Location',
      short: 'Test property description',
      picture: '/test.jpg',
      added: { month: 'January', day: 1, year: 2024 }
    },
    {
      id: 'prop2',
      type: 'Flat',
      bedrooms: 2,
      bathrooms: 1,
      area: 800,
      price: 300000,
      location: 'Another Location',
      short: 'Another test property',
      picture: '/test2.jpg',
      added: { month: 'February', day: 15, year: 2024 }
    }
  ]
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockProperties),
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

describe('SearchPage Component', () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorageMock.clear();
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  test('renders search form with all filter inputs', async () => {
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Min Price/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Max Price/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Min Bedrooms/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Max Bedrooms/i)).toBeInTheDocument();
    });
  });

  test('filters properties by type', async () => {
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText(/Test property description/i)).toBeInTheDocument();
    });

    const typeSelect = screen.getByLabelText(/Property Type/i);
    fireEvent.change(typeSelect, { target: { value: 'House' } });
    
    const searchButton = screen.getByText(/Search/i);
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText(/Test property description/i)).toBeInTheDocument();
      expect(screen.queryByText(/Another test property/i)).not.toBeInTheDocument();
    });
  });

  test('adds property to favourites when heart button is clicked', async () => {
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText(/Test property description/i)).toBeInTheDocument();
    });

    const favouriteButtons = screen.getAllByLabelText(/Add to favourites/i);
    fireEvent.click(favouriteButtons[0]);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalled();
      const callArgs = JSON.parse(localStorageMock.setItem.mock.calls[0][1]);
      expect(callArgs).toHaveLength(1);
      expect(callArgs[0].id).toBe('prop1');
    });
  });

  test('prevents duplicate favourites', async () => {
    // Set initial favourites
    localStorageMock.setItem('favourites', JSON.stringify([mockProperties.properties[0]]));
    localStorageMock.getItem.mockReturnValue(JSON.stringify([mockProperties.properties[0]]));
    
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText(/Test property description/i)).toBeInTheDocument();
    });

    const favouriteButtons = screen.getAllByLabelText(/Add to favourites/i);
    fireEvent.click(favouriteButtons[0]);

    await waitFor(() => {
      // Should still have only one favourite
      const setItemCalls = localStorageMock.setItem.mock.calls;
      const lastCall = setItemCalls[setItemCalls.length - 1];
      const favourites = JSON.parse(lastCall[1]);
      expect(favourites).toHaveLength(1);
    });
  });

  test('removes property from favourites when delete button is clicked', async () => {
    // Set initial favourites
    localStorageMock.setItem('favourites', JSON.stringify([mockProperties.properties[0]]));
    localStorageMock.getItem.mockReturnValue(JSON.stringify([mockProperties.properties[0]]));
    
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText(/Test property description/i)).toBeInTheDocument();
    });

    const removeButtons = screen.getAllByLabelText(/Remove.*from favourites/i);
    fireEvent.click(removeButtons[0]);

    await waitFor(() => {
      const setItemCalls = localStorageMock.setItem.mock.calls;
      const lastCall = setItemCalls[setItemCalls.length - 1];
      const favourites = JSON.parse(lastCall[1]);
      expect(favourites).toHaveLength(0);
    });
  });

  test('clears all favourites when clear button is clicked', async () => {
    // Set initial favourites with multiple items
    localStorageMock.setItem('favourites', JSON.stringify(mockProperties.properties));
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockProperties.properties));
    
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByText(/Clear Favourites/i)).toBeInTheDocument();
    });

    // Mock window.confirm to return true
    window.confirm = jest.fn(() => true);

    const clearButton = screen.getByText(/Clear Favourites/i);
    fireEvent.click(clearButton);

    await waitFor(() => {
      const setItemCalls = localStorageMock.setItem.mock.calls;
      const lastCall = setItemCalls[setItemCalls.length - 1];
      const favourites = JSON.parse(lastCall[1]);
      expect(favourites).toHaveLength(0);
    });
  });

  test('validates filter inputs correctly', async () => {
    // Mock window.alert
    window.alert = jest.fn();
    
    render(<BrowserRouter><SearchPage /></BrowserRouter>);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/Min Price/i)).toBeInTheDocument();
    });

    const minPriceInput = screen.getByLabelText(/Min Price/i);
    const maxPriceInput = screen.getByLabelText(/Max Price/i);
    
    // Set min price greater than max price
    fireEvent.change(minPriceInput, { target: { value: '600000' } });
    fireEvent.change(maxPriceInput, { target: { value: '400000' } });
    
    const searchButton = screen.getByText(/Search/i);
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith('Min Price cannot be greater than Max Price.');
    });
  });
});*/

