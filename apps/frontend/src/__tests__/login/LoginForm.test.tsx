import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LoginForm } from '../../app/components/InitialLogin/LoginForm'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('LoginForm', () => {
  beforeEach(() => {
    render(<LoginForm onLogin={() => Promise.resolve()} />)
  })

  const getEmailInput = () => screen.getByPlaceholderText(/email address/i)
  const getPasswordInput = () => screen.getByPlaceholderText(/password/i)
  const getSubmitButton = () => screen.getByRole('button', { name: /sign in/i })

  describe('Email Validation', () => {
    it('should show error when email is missing @ symbol', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'invalidemail' } })
      await act(async () => {
        fireEvent.submit(getSubmitButton().closest('form')!)
      })

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(/email must contain @ symbol/i)
      })
    })

    it('should show error when email has less than 2 characters before @', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'a@gmail.com' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(/email must have at least 2 characters before @/i)
      })
    })

    it('should show error when email starts with special character', async () => {
      fireEvent.change(getEmailInput(), { target: { value: '@test@gmail.com' } })
      await act(async () => {
        fireEvent.submit(getSubmitButton().closest('form')!)
      })

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(/email cannot start with special characters/i)
      })
    })

    it('should show error when email domain is not allowed', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'test@invalid.com' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(/email must be from gmail.com, yahoo.com, or pipiper.com/i)
      })
    })

    it('should accept valid email from allowed domains', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'test@gmail.com' } })
      fireEvent.change(getPasswordInput(), { target: { value: 'ValidPass123' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.queryByTestId('email-error')).not.toBeInTheDocument()
      })
    })
  })

  describe('Password Validation', () => {
    it('should show error when password is less than 8 characters', async () => {
      fireEvent.change(getPasswordInput(), { target: { value: 'short' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent(/password must be at least 8 characters/i)
      })
    })

    it('should show error when password has no mixed cases', async () => {
      fireEvent.change(getPasswordInput(), { target: { value: 'lowercase123' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent(/password must contain at least one uppercase letter/i)
      })
    })

    it('should show error when password starts with special character', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'test@gmail.com' } })
      fireEvent.change(getPasswordInput(), { target: { value: '@password123' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent(/password cannot start with special characters/i)
      })
    })

    it('should show error when password has no numbers', async () => {
      fireEvent.change(getPasswordInput(), { target: { value: 'Password' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('password-error')).toHaveTextContent(/password must contain at least one number/i)
      })
    })

    it('should accept valid password', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'test@gmail.com' } })
      fireEvent.change(getPasswordInput(), { target: { value: 'ValidPass123' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.queryByTestId('password-error')).not.toBeInTheDocument()
      })
    })
  })

  describe('Form Submission', () => {
    it('should submit form when all validations pass', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'test@gmail.com' } })
      fireEvent.change(getPasswordInput(), { target: { value: 'ValidPass123' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.queryByTestId('email-error')).not.toBeInTheDocument()
        expect(screen.queryByTestId('password-error')).not.toBeInTheDocument()
      })
    })

    it('should show multiple validation errors when multiple fields are invalid', async () => {
      fireEvent.change(getEmailInput(), { target: { value: 'a@gmail.com' } })
      fireEvent.change(getPasswordInput(), { target: { value: 'short' } })
      await act(async () => {
        fireEvent.click(getSubmitButton())
      })

      await waitFor(() => {
        expect(screen.getByTestId('email-error')).toHaveTextContent(/email must have at least 2 characters before @/i)
        expect(screen.getByTestId('password-error')).toHaveTextContent(/password must be at least 8 characters/i)
      })
    })
  })
}) 