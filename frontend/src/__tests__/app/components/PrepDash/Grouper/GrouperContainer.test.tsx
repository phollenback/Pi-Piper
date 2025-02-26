import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GrouperContainer from '@/app/components/PrepDash/Grouper/GrouperContainer';
import GrouperPage from '@/app/prep-dash/grouper/page';

const mockGroups = [
  {
    group_id: 1,
    group_name: 'Meat Prep',
    restaurant_id: 1,
    items: [
      { id: 1, name: 'Slice Prosciutto', type: 'ingredient' as const },
      { id: 2, name: 'Slice Coppa', type: 'ingredient' as const }
    ]
  }
];

// Create a new QueryClient for each test
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('GrouperContainer', () => {
  it('renders initial groups correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GrouperContainer initialGroups={mockGroups} />
      </QueryClientProvider>
    );
    
    expect(screen.getByText('Meat Prep')).toBeInTheDocument();
    expect(screen.getByText('Slice Prosciutto')).toBeInTheDocument();
    expect(screen.getByText('Slice Coppa')).toBeInTheDocument();
  });

  it('shows the correct active tab', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GrouperContainer initialGroups={mockGroups} />
      </QueryClientProvider>
    );
    
    // Verify the buttons exist and have the correct text
    expect(screen.getByRole('button', { name: /ingredients/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /prep items/i })).toBeInTheDocument();
    
    // Verify the active button has the correct background color
    const ingredientsButton = screen.getByRole('button', { name: /ingredients/i });
    expect(ingredientsButton).toHaveStyle('background-color: rgb(76, 175, 80)'); // Active button color
    
    const prepItemsButton = screen.getByRole('button', { name: /prep items/i });
    expect(prepItemsButton).toHaveStyle('background-color: rgb(255, 255, 255)'); // Inactive button color
  });
});

describe('GrouperPage', () => {
  it('renders GrouperPage correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <GrouperPage />
      </QueryClientProvider>
    );
  });
}); 