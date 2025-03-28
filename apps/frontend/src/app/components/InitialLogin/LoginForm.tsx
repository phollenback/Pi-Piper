import { useState } from "react"

interface LoginFormProps {
  onLogin: (e: React.FormEvent) => Promise<void>;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({ email: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newErrors: { email: string; password: string } = { email: '', password: '' }
    
        // Validate email
        if (/^[!@#$%^&*(),.?":{}|<>]/.test(formData.email)) {
          newErrors.email = 'Email cannot start with special characters'
        } else if (!formData.email.includes('@')) {
          newErrors.email = 'Email must contain @ symbol'
        } else if (formData.email.split('@')[0].length < 2) {
          newErrors.email = 'Email must have at least 2 characters before @'
        } else if (!['gmail.com', 'yahoo.com', 'pipiper.com'].includes(formData.email.split('@')[1])) {
          newErrors.email = 'Email must be from gmail.com, yahoo.com, or pipiper.com'
        }
    
        // Validate password
        if (/^[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
          newErrors.password = 'Password cannot start with special characters'
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters'
        } else if (!/[A-Z]/.test(formData.password)) {
          newErrors.password = 'Password must contain at least one uppercase letter'
        } else if (!/\d/.test(formData.password)) {
          newErrors.password = 'Password must contain at least one number'
        }
    
        setErrors(newErrors)
    
        if (!newErrors.email && !newErrors.password) {
          console.log('Login successful:', formData)
          await onLogin(e);
        }
    }
    
    return (
        <div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          {errors.email && (
            <div className="mt-1 text-sm text-red-600" data-testid="email-error">
              {errors.email}
            </div>
          )}
          {errors.password && (
            <div className="mt-1 text-sm text-red-600" data-testid="password-error">
              {errors.password}
            </div>
          )}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
        </div>
    )
}