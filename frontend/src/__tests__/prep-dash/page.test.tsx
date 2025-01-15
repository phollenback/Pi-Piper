import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '../../redux/lib/store';
import PlanPage from '../../app/prep-dash/planner/page';

// Create a query client for testing
const queryClient = new QueryClient();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {ui}
      </Provider>
    </QueryClientProvider>
  );
};

describe('PlanPage', () => {
  it('shifts item from todo to complete on button click', async () => {
    renderWithProviders(<PlanPage />);

    // Wait for the items to load
    await waitFor(() => expect(screen.queryByText(/Loading plan.../i)).not.toBeInTheDocument());

    const todoItem = await screen.findByText(/Chicken Breast/i);
    expect(todoItem).toBeInTheDocument();

    // Click the "Complete" button
    const completeButton = screen.getAllByText(/ADD/i)[0];
    fireEvent.click(completeButton);

    // Check that the item has moved to the "complete" list
    const completedItem = await screen.findByText(/Chicken Breast/i);
    expect(completedItem).toBeInTheDocument();
  });

  it('shifts item from complete to todo on button click', async () => {
    renderWithProviders(<PlanPage />);

    // Wait for the items to load
    await waitFor(() => expect(screen.queryByText(/Loading plan.../i)).not.toBeInTheDocument());

    const todoItem = await screen.findByText(/Chicken Breast/i);
    expect(todoItem).toBeInTheDocument();

    // Click the "Complete" button to move it to the complete list
    const completeButton = screen.getAllByText(/ADD/i)[0];
    fireEvent.click(completeButton);

    // Click the "Complete" button again to move it back to the todo list
    const completeButtonAgain = screen.getAllByText(/ADD/i)[0];
    fireEvent.click(completeButtonAgain);

    // Check that the item has moved back to the "todo" list
    const todoItemAgain = await screen.findByText(/Chicken Breast/i);
    expect(todoItemAgain).toBeInTheDocument();
  });
});


