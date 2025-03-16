import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@/redux/lib/store';
import PlanPage from '@/app/prep-dash/planner/page';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Mock axios and useQuery
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const mockPrepItems = [
  { prep_item_id: 1, name: 'Slice Prosciutto', description: 'Thinly slice prosciutto', category: 1 },
  { prep_item_id: 2, name: 'Slice Coppa', description: 'Slice coppa', category: 1 },
];

const mockDailyList = [
  { prep_list_id: 1, name: 'Slice Prosciutto', description: 'Thinly slice prosciutto', category: 1 },
];

describe('PlanPage', () => {
  beforeEach(() => {
    // Mock axios responses
    (axios.get as jest.Mock).mockResolvedValue({ data: mockPrepItems });
    (useQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey.includes('dailyPrep')) {
        return { data: mockDailyList, isError: false };
      }
      return { data: [], isError: false };
    });
  });

  it('renders the page correctly', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <PlanPage />
        </Provider>
      );
    });

    expect(screen.getByText(/Daily Prep Items for Tomorrow/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /Select a category/i })).toBeInTheDocument();
  });

  it('filters prep items by category', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <PlanPage />
        </Provider>
      );
    });

    const categorySelect = screen.getByRole('combobox', { name: /Select a category/i });
    fireEvent.change(categorySelect, { target: { value: '1' } });

    await waitFor(() => {
      expect(screen.getByText('Slice Prosciutto')).toBeInTheDocument();
    });
  });
}); 