'use client';

import { useState, useEffect } from 'react';
import Button from '../../Elements/Button';
import axios from 'axios';
import CreateUserModal from '../../Elements/CreateUserModal';

interface User {
  user_id: number;
  username: string;
  email: string | null;
  phone_number: string | null;
  role: 'user';
  restaurant_id: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

interface EditModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
}

const EditModal: React.FC<EditModalProps> = ({ user, isOpen, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState<User>(user || {
    user_id: 0,
    username: '',
    email: null,
    phone_number: null,
    role: 'user',
    restaurant_id: 1,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  });

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={editedUser.username}
              onChange={(e) => setEditedUser({ ...editedUser, username: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={editedUser.email || ''}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              value={editedUser.phone_number || ''}
              onChange={(e) => setEditedUser({ ...editedUser, phone_number: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
            <select
              id="status"
              value={editedUser.status}
              onChange={(e) => setEditedUser({ ...editedUser, status: e.target.value as User['status'] })}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              label="SAVE"
              onClick={() => onSave(editedUser)}
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black'
              }}
            />
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
        </div>
      </div>
    </div>
  );
};

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function UserManager({ hideHeading = false }) {
  const RESTAURANT_ID = 1;
  const [users, setUsers] = useState<User[]>([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [successModal, setSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>(`/api/users?restaurantId=${RESTAURANT_ID}`);
      if (response.status >= 200 && response.status < 300) {
        setUsers(response.data);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  const handleEdit = async (updatedUser: User) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${updatedUser.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        setUsers(users.map(user => 
          user.user_id === updatedUser.user_id ? updatedUser : user
        ));
        setEditModal(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  const handleDelete = async (userId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.user_id !== userId));
        setDeleteModal(false);
        setSuccessModal(true);
      }
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  const handleCreateSuccess = () => {
    fetchUsers();
    setSuccessMessage('New user created successfully!');
    setSuccessModal(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      {!hideHeading && (
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
      )}
      
      {hideHeading && (
        <div className="flex justify-end mb-6">
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
      )}

      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4 border-b">
          <h2 className="text-xl font-semibold">Current Users</h2>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left w-16">ID</th>
              <th className="p-4 text-left">Username</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id} className="border-b">
                <td className="p-4">{user.user_id}</td>
                <td className="p-4">{user.username}</td>
                <td className="p-4">{user.email || '-'}</td>
                <td className="p-4">{user.phone_number || '-'}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <Button
                    label="EDIT"
                    onClick={() => {
                      setSelectedUser(user);
                      setEditModal(true);
                    }}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid black'
                    }}
                  />
                  <Button
                    label="DELETE"
                    onClick={() => {
                      setSelectedUser(user);
                      setDeleteModal(true);
                    }}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid black'
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <EditModal
        user={selectedUser}
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        onSave={handleEdit}
      />

      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="delete user?"
      >
        <div className="flex justify-center gap-4">
          <Button
            label="DELETE"
            onClick={() => handleDelete(selectedUser?.user_id || 0)}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
          <Button
            label="REVERT"
            onClick={() => setDeleteModal(false)}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
        </div>
      </Modal>

      <CreateUserModal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        onSuccess={handleCreateSuccess}
        restaurantId={RESTAURANT_ID}
      />

      <Modal
        isOpen={successModal}
        onClose={() => setSuccessModal(false)}
        title="Success"
      >
        <div className="flex flex-col items-center p-4">
          <p className="mb-4">{successMessage}</p>
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
      </Modal>
    </div>
  );
} 