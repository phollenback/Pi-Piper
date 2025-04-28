import { useState } from "react"

interface LoginFormProps {
  onLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
    const [formData, setFormData] = useState({ username: '', password: '' })
    const [errors, setErrors] = useState({ username: '', password: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newErrors: { username: string; password: string } = { username: '', password: '' }
    
        // Validate username
        if (!formData.username) {
            newErrors.username = 'Username is required'
        } else if (formData.username.length < 3) {
            newErrors.username = 'Username must be at least 3 characters'
        }
    
        // Validate password
        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one uppercase letter'
        } else if (!/\d/.test(formData.password)) {
            newErrors.password = 'Password must contain at least one number'
        }
    
        setErrors(newErrors)
    
        if (!newErrors.username && !newErrors.password) {
            await onLogin(e);
        }
    }
    
    return (
        <div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label className="sr-only" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            value={formData.username}
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
                {errors.username && (
                    <div className="mt-1 text-sm text-red-600" data-testid="username-error">
                        {errors.username}
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