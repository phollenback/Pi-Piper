'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../Elements/Button';
import PrepTable from './PrepTable';
import EditModal from './EditModal';
import Modal from '../../Elements/Modal';
import { User } from './types';

// API endpoint for users
const API_URL = '/api/users';

// Type for error response data
interface ErrorResponse {
  message?: string;
  errors?: Array<{ msg: string; param?: string; location?: string }>;
}

// Type for Axios error
interface AxiosErrorType {
  response?: {
    status: number;
    statusText: string;
    data: ErrorResponse;
  };
  request?: unknown;
  message: string;
}

export default function PrepManager() {
  const RESTAURANT_ID = 1;
  const [users, setUsers] = useState<User[]>([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [successModal, setSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role: 'prep' as const,
    restaurant_id: RESTAURANT_ID,
    status: 'active' as const
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<User[]>(`${API_URL}?restaurantId=${RESTAURANT_ID}`);
      
      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        setUsers(response.data);
      } else {
        setError(`Failed to load users. Server returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
      const axiosError = error as AxiosErrorType;
      if (axiosError.response) {
        setError(`Failed to load users: ${axiosError.response.status} - ${axiosError.response.statusText}`);
      } else if (axiosError.request) {
        setError('Failed to load users. No response received from server.');
      } else {
        setError(`Failed to load users: ${axiosError.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (updatedUser: User) => {
    setLoading(true);
    setError(null);
    console.log('Sending update request with data:', updatedUser);
    
    // Create a copy of the user object without read-only properties
    const userToUpdate = {
      username: updatedUser.username,
      email: updatedUser.email,
      phone_number: updatedUser.phone_number,
      role: updatedUser.role,
      restaurant_id: updatedUser.restaurant_id,
      status: updatedUser.status
    };

    try {
      const response = await axios.put(`${API_URL}/${updatedUser.user_id}`, userToUpdate);
      console.log('Response from update request:', response);
      
      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        // Refresh the user list to get the latest data
        await fetchUsers();
        setEditModal(false);
        setSuccessMessage('User updated successfully!');
        setSuccessModal(true);
      } else {
        setError(`Failed to update user. Server returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to update user:', error);
      const axiosError = error as AxiosErrorType;
      if (axiosError.response) {
        if (axiosError.response.data?.errors) {
          const errorMessages = axiosError.response.data.errors.map((err: { msg: string }) => err.msg).join(', ');
          setError(`Failed to update user: ${errorMessages}`);
        } else if (axiosError.response.data?.message) {
          setError(`Failed to update user: ${axiosError.response.data.message}`);
        } else {
          setError(`Failed to update user: ${axiosError.response.status} - ${axiosError.response.statusText}`);
        }
      } else if (axiosError.request) {
        setError('Failed to update user. No response received from server.');
      } else {
        setError(`Failed to update user: ${axiosError.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, newUser);
      
      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        // Refresh the user list to include the new user
        await fetchUsers();
        setCreateModal(false);
        setNewUser({
          username: '',
          password: '',
          email: '',
          phone_number: '',
          role: 'prep',
          restaurant_id: RESTAURANT_ID,
          status: 'active'
        });
        setSuccessMessage('New user created successfully!');
        setSuccessModal(true);
      } else {
        setError(`Failed to create user. Server returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to create user:', error);
      const axiosError = error as AxiosErrorType;
      if (axiosError.response) {
        if (axiosError.response.data?.errors) {
          const errorMessages = axiosError.response.data.errors.map((err: { msg: string }) => err.msg).join(', ');
          setError(`Failed to create user: ${errorMessages}`);
        } else if (axiosError.response.data?.message) {
          setError(`Failed to create user: ${axiosError.response.data.message}`);
        } else {
          setError(`Failed to create user: ${axiosError.response.status} - ${axiosError.response.statusText}`);
        }
      } else if (axiosError.request) {
        setError('Failed to create user. No response received from server.');
      } else {
        setError(`Failed to create user: ${axiosError.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`${API_URL}/${userId}`);
      
      // Check if the response is successful
      if (response.status >= 200 && response.status < 300) {
        setUsers(users.filter(user => user.user_id !== userId));
        setDeleteModal(false);
        setSuccessMessage('User deleted successfully!');
        setSuccessModal(true);
      } else {
        setError(`Failed to delete user. Server returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
      const axiosError = error as AxiosErrorType;
      if (axiosError.response) {
        if (axiosError.response.data?.message) {
          setError(`Failed to delete user: ${axiosError.response.data.message}`);
        } else {
          setError(`Failed to delete user: ${axiosError.response.status} - ${axiosError.response.statusText}`);
        }
      } else if (axiosError.request) {
        setError('Failed to delete user. No response received from server.');
      } else {
        setError(`Failed to delete user: ${axiosError.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold underline">MANAGE USERS</h1>
        <Button
          label="CREATE NEW USER"
          onClick={() => setCreateModal(true)}
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            border: '1px solid black'
          }}
        />
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading && !error ? (
        <div className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <PrepTable 
          users={users}
          onEdit={(user) => {
            setSelectedUser(user);
            setEditModal(true);
          }}
          onDelete={(user) => {
            setSelectedUser(user);
            setDeleteModal(true);
          }}
        />
      )}

      {/* Edit Modal */}
      <EditModal
        user={selectedUser}
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        onSave={handleEdit}
      />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Delete User?"
      >
        <div className="p-4">
          <p className="mb-4">Are you sure you want to delete this user? This action cannot be undone.</p>
          <div className="flex justify-center gap-4">
            <Button
              label="DELETE"
              onClick={() => handleDelete(selectedUser?.user_id || 0)}
              style={{
                backgroundColor: 'white',
                color: 'red',
                border: '1px solid red'
              }}
            />
            <Button
              label="CANCEL"
              onClick={() => setDeleteModal(false)}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
              }}
            />
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        title="Success"
      >
        <div className="p-4">
          <p className="mb-4">{successMessage}</p>
          <div className="flex justify-center">
            <Button
              label="CLOSE"
              onClick={() => setSuccessModal(false)}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
              }}
            />
          </div>
        </div>
      </Modal>

      {/* Create New User Modal */}
      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        title="Create New User"
      >
        <div className="p-4">
          <form onSubmit={handleCreate} className="space-y-4">
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
                className="px-4 py-2 rounded border border-black text-black bg-white hover:bg-gray-100"
              >
                CREATE
              </button>
              <Button
                label="CANCEL"
                onClick={() => setCreateModal(false)}
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
    </div>
  );
} 