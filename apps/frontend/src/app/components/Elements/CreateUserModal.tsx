import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import Modal from './Modal';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  restaurantId: number;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ 
  isOpen, 
  onClose, 
  onSuccess,
  restaurantId 
}) => {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role: 'prep' as const,
    restaurant_id: restaurantId,
    status: 'active' as const
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post('/api/users', newUser);
      
      if (response.status >= 200 && response.status < 300) {
        // Reset form
        setNewUser({
          username: '',
          password: '',
          email: '',
          phone_number: '',
          role: 'prep',
          restaurant_id: restaurantId,
          status: 'active'
        });
        
        onSuccess();
        onClose();
      } else {
        setError(`Failed to create user. Server returned status: ${response.status}`);
      }
    } catch (error: unknown) {
      console.error('Failed to create user:', error);
      
      const axiosError = error as {
        response?: {
          status: number;
          statusText: string;
          data?: {
            message?: string;
            errors?: Array<{ msg: string; param?: string; location?: string }>;
          };
        };
        request?: unknown;
        message: string;
      };
      
      if (axiosError.response?.data?.errors) {
        const errorMessages = axiosError.response.data.errors
          .map((err: { msg: string }) => err.msg)
          .join(', ');
        setError(`Failed to create user: ${errorMessages}`);
      } else if (axiosError.response?.data?.message) {
        setError(`Failed to create user: ${axiosError.response.data.message}`);
      } else if (axiosError.response) {
        setError(`Failed to create user: ${axiosError.response.status} - ${axiosError.response.statusText}`);
      } else if (axiosError.request) {
        setError('Failed to create user. No response received from server.');
      } else {
        setError(`Failed to create user: ${axiosError.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New User"
    >
      <div className="p-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username*</label>
            <input
              id="username"
              name="username"
              type="text"
              value={newUser.username}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password*</label>
            <input
              id="password"
              name="password"
              type="password"
              value={newUser.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter password"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={newUser.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium mb-1">Phone</label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={newUser.phone_number}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded border border-black text-black bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'CREATE'}
            </button>
            <Button
              label="CANCEL"
              onClick={onClose}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
              }}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateUserModal; 