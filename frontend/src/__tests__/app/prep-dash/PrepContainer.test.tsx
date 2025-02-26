import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/redux/lib/store';
import PrepContainer from '@/app/prep-dash/page';
import { useQuery } from '@tanstack/react-query';
import PrepListItem from '@/app/types/models/PrepListItem';

// Mock data
const mockCategories = [
  { category_id: 1, category_name: 'Meat', color: 'red' },
  { category_id: 2, category_name: 'Vegetables', color: 'green' },
];

const mockPrepItems = [
  { prep_item_id: 1, name: 'Slice Prosciutto', category: 1 },
  { prep_item_id: 2, name: 'Chop Carrots', category: 2 },
];

// Mock useQuery globally
jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'), // Preserve other exports
  useQuery: jest.fn(),
}));

// Mock the Kanban component
jest.mock('@/app/components/PrepDash/DailyPrep/Kanban', () => ({
    
  __esModule: true,
  default: ({ prepItems, category }: { prepItems: PrepListItem[]; category?: number }) => (
    <div>
      {prepItems
        .filter((item) => !category || item.category === category)
        .map((item) => (
          <div key={item.prep_list_id}>{item.name}</div>
        ))}
    </div>
  ),
}));

describe('PrepContainer', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  beforeEach(() => {
    // Mock useQuery responses
    (useQuery as jest.Mock).mockImplementation(({ queryKey }) => {
      if (queryKey.includes('prepItems')) {
        return { data: mockPrepItems, isLoading: false };
      }
      if (queryKey.includes('categories')) {
        return { data: mockCategories, isLoading: false };
      }
      return { data: [], isLoading: false };
    });
  });

  it('renders the component correctly', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PrepContainer />
        </QueryClientProvider>
      </Provider>
    );

    // Verify categories are rendered
    expect(screen.getByText('Meat')).toBeInTheDocument();
    expect(screen.getByText('Vegetables')).toBeInTheDocument();

    // Verify reset button is rendered
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('filters prep items by category when a category is selected', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PrepContainer />
        </QueryClientProvider>
      </Provider>
    );

    // Click on the "Meat" category button
    const meatButton = screen.getByText('Meat');
    fireEvent.click(meatButton);

    // Verify only "Slice Prosciutto" is rendered (Meat category)
    expect(screen.getByText('Slice Prosciutto')).toBeInTheDocument();
    expect(screen.queryByText('Chop Carrots')).not.toBeInTheDocument();
  });

  it('resets filters when the reset button is clicked', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PrepContainer />
        </QueryClientProvider>
      </Provider>
    );

    // Click on the "Meat" category button
    const meatButton = screen.getByText('Meat');
    fireEvent.click(meatButton);

    // Click the reset button
    const resetButton = screen.getByRole('button', { name: /reset/i });
    fireEvent.click(resetButton);

    // Verify all prep items are rendered
    expect(screen.getByText('Slice Prosciutto')).toBeInTheDocument();
    expect(screen.getByText('Chop Carrots')).toBeInTheDocument();
  });

  it('shows loading state while fetching data', () => {
    // Mock loading state
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: true,
    }));

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PrepContainer />
        </QueryClientProvider>
      </Provider>
    );

    // Verify loading message is displayed
    expect(screen.getByText('loading lists...')).toBeInTheDocument();
  });
}); 