import '@testing-library/jest-dom'
import Kanban from '../../app/components/PrepDash/DailyPrep/Kanban'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { PrepListItem } from '@/app/types/models/PrepListItem'
import searchReducer from '@/redux/features/search/searchSlice'

// Mock the fetch function
global.fetch = jest.fn()

// Create a new QueryClient for testing
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

// Create a mock store
const store = configureStore({
  reducer: {
    search: searchReducer
  },
  preloadedState: {
    search: {
      prepSearchTerm: '',
      managerSearchTerm: '',
      loading: false,
      error: null
    }
  }
})

// Wrapper component to provide both QueryClient and Redux context
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </Provider>
)

// Mock prep items data
const mockPrepItems: PrepListItem[] = [
  {
    prep_list_id: 1,
    restaurant_id: 1,
    name: 'Test Item 1',
    category: 1,
    status: 'todo',
    quantity: 5,
    unit: 'kg',
    description: 'Test description 1',
    note: 'Test notes 1',
    date: new Date().toISOString()
  },
  {
    prep_list_id: 2,
    restaurant_id: 1,
    name: 'Test Item 2',
    category: 1,
    status: 'complete',
    quantity: 3,
    unit: 'kg',
    description: 'Test description 2',
    note: 'Test notes 2',
    date: new Date().toISOString()
  },
  {
    prep_list_id: 3,
    restaurant_id: 1,
    name: 'Test Item 3',
    category: 2,
    status: 'todo',
    quantity: 2,
    unit: 'kg',
    description: 'Test description 3',
    note: 'Test notes 3',
    date: new Date().toISOString()
  }
]

describe('Kanban', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    (global.fetch as jest.Mock).mockReset()
  })

  it('should render all components successfully', () => {
    render(<Kanban prepItems={mockPrepItems} category={null} />, { wrapper })
    
    // Check if both columns are rendered
    expect(screen.getByText('To-Do')).toBeInTheDocument()
    expect(screen.getByText('Completed')).toBeInTheDocument()
    
    // Check if items are rendered in correct columns
    expect(screen.getByText('Test Item 1')).toBeInTheDocument()
    expect(screen.getByText('Test Item 2')).toBeInTheDocument()
    expect(screen.getByText('Test Item 3')).toBeInTheDocument()
  })

  it('should render a success message when the todo list is empty', async () => {
    const allCompleteItems = mockPrepItems.map(item => ({
      ...item,
      status: 'complete'
    }))
    
    render(<Kanban prepItems={allCompleteItems} category={null} />, { wrapper })
    
    await waitFor(() => {
      expect(screen.getByText('Prep List Complete!')).toBeInTheDocument()
      expect(screen.getByText('All items for today are completed.')).toBeInTheDocument()
    })
  })

  it('should filter by category correctly', () => {
    render(<Kanban prepItems={mockPrepItems} category={1} />, { wrapper })
    
    // Items with category 1 should be visible
    expect(screen.getByText('Test Item 1')).toBeInTheDocument()
    expect(screen.getByText('Test Item 2')).toBeInTheDocument()
    
    // Items with category 2 should not be visible
    expect(screen.queryByText('Test Item 3')).not.toBeInTheDocument()
  })

  it('should render the correct items for the restaurant', () => {
    render(<Kanban prepItems={mockPrepItems} category={null} />, { wrapper })
    
    // Check if items are in correct columns based on status
    const todoColumn = screen.getByText('To-Do').closest('div')
    const completeColumn = screen.getByText('Completed').closest('div')
    
    expect(todoColumn).toHaveTextContent('Test Item 1')
    expect(todoColumn).toHaveTextContent('Test Item 3')
    expect(completeColumn).toHaveTextContent('Test Item 2')
  })

  it('should update item status when clicked', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true })
    })

    render(<Kanban prepItems={mockPrepItems} category={null} />, { wrapper })
    
    // Find the Complete button within the context of Test Item 1
    const testItem1 = screen.getByText('Test Item 1').closest('div')
    const completeButton = within(testItem1!).getByRole('button', { name: /complete/i })
    fireEvent.click(completeButton)
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/prep-items/update'),
        expect.objectContaining({
          method: 'PUT',
          body: expect.stringContaining('"status":"complete"')
        })
      )
    })
  })

  it('should record completion time when all items are completed', async () => {
    const allCompleteItems = mockPrepItems.map(item => ({
      ...item,
      status: 'complete'
    })) as PrepListItem[]
    
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true })
    })

    render(<Kanban prepItems={allCompleteItems} category={null} />, { wrapper })
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/metrics/record-prep-completion/1'),
        expect.objectContaining({
          method: 'POST'
        })
      )
    })
  })

  it('should handle API errors gracefully', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'))
    
    render(<Kanban prepItems={mockPrepItems} category={null} />, { wrapper })
    
    // Find the Complete button within the context of Test Item 1
    const testItem1 = screen.getByText('Test Item 1').closest('div')
    const completeButton = within(testItem1!).getByRole('button', { name: /complete/i })
    fireEvent.click(completeButton)
    
    // The component should still render without crashing
    await waitFor(() => {
      expect(screen.getByText('Test Item 1')).toBeInTheDocument()
    })
  })
})