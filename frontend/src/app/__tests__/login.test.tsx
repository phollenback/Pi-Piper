// Example frontend test for login page
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../login/page';

describe('Login Page', () => {
  it('should handle login submission', async () => {
    const { getByLabelText, getByRole } = render(<LoginPage />);
    
    fireEvent.change(getByLabelText('Username'), {
      target: { value: 'testuser' }
    });
    
    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'password' }
    });
    
    fireEvent.click(getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(window.location.pathname).toBe('/dashboard');
    });
  });
}); 