import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '../../redux/lib/store';
import PrepContainer from '../../app/prep-dash/page';

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

describe('PrepContainer', () => {
  it('renders without crashing', () => {
    renderWithProviders(<PrepContainer />);
  });

  it('renders the button group', () => {
    renderWithProviders(<PrepContainer />);
    const buttonGroup = screen.getByRole('group');
    expect(buttonGroup).toBeInTheDocument();
  });

  it('renders the reset button', () => {
    renderWithProviders(<PrepContainer />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(resetButton).toBeInTheDocument();
  });

  it('renders the loading text when prep items are loading', () => {
    renderWithProviders(<PrepContainer />);
    const loadingText = screen.getByText(/prep lists loading/i);
    expect(loadingText).toBeInTheDocument();
  });
});