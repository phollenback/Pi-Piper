'use client';

import { useState, useEffect } from 'react';
//import { useRouter } from 'next/navigation';
import Button from '../../Elements/Button';
import AdminTable from './AdminTable';
import EditModal from './EditModal';
import Modal from '../../Elements/Modal';
import { User } from '../../../types/models/User';
import { Admin } from './types';

export default function AdminManager({ hideHeading = false }) {
  // const router = useRouter();
  const RESTAURANT_ID = 1;
  const [admins, setAdmins] = useState<User[]>([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<User | null>(null);
  const [successModal, setSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    role: 'admin' as const,
    restaurant_id: RESTAURANT_ID,
    status: 'active' as const
  });

  useEffect(() => {
    loadManagers();
  }, []);

  const loadManagers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/restaurants/${RESTAURANT_ID}/users`);
      if (!response.ok) {
        throw new Error('Failed to fetch managers');
      }
      const data = await response.json();
      setAdmins(data.filter((user: User) => user.role === 'admin'));
    } catch (error) {
      console.error('Failed to fetch managers:', error);
      setError(error instanceof Error ? error.message : 'Failed to load managers');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (updatedAdmin: User) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/restaurants/${RESTAURANT_ID}/users/${updatedAdmin.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: updatedAdmin.username,
          email: updatedAdmin.email || undefined,
          role: updatedAdmin.role || 'admin',
          status: updatedAdmin.status,
          first_name: updatedAdmin.first_name,
          last_name: updatedAdmin.last_name
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update manager');
      }
      
      await loadManagers();
      setEditModal(false);
      setSuccessMessage('Manager updated successfully!');
      setSuccessModal(true);
    } catch (error) {
      console.error('Failed to update manager:', error);
      setError(error instanceof Error ? error.message : 'Failed to update manager');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/restaurants/${RESTAURANT_ID}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Failed to create manager');
      }

      await loadManagers();
      setCreateModal(false);
      setNewUser({
        username: '',
        password: '',
        email: '',
        role: 'admin',
        restaurant_id: RESTAURANT_ID,
        status: 'active'
      });
      setSuccessMessage('New manager created successfully!');
      setSuccessModal(true);
    } catch (error) {
      console.error('Failed to create manager:', error);
      setError(error instanceof Error ? error.message : 'Failed to create manager');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (managerId: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/restaurants/${RESTAURANT_ID}/users/${managerId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete manager');
      }

      setAdmins(admins.filter(admin => admin.user_id !== managerId));
      setDeleteModal(false);
      setSuccessMessage('Manager deleted successfully!');
      setSuccessModal(true);
    } catch (error) {
      console.error('Failed to delete manager:', error);
      setError(error instanceof Error ? error.message : 'Failed to delete manager');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      {!hideHeading && (
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold underline">MANAGE ADMINS</h1>
          <Button
            label="CREATE NEW ADMIN"
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
            label="CREATE NEW ADMIN"
            onClick={() => setCreateModal(true)}
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              border: '1px solid black'
            }}
          />
        </div>
      )}

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
        <AdminTable 
          admins={admins as Admin[]} // Type assertion to ensure admins is treated as Admin[]
          onEdit={(admin) => {
            setSelectedAdmin(admin);
            setEditModal(true);
          }}
          onDelete={(admin) => {
            setSelectedAdmin(admin);
            setDeleteModal(true);
          }}
        />
      )}

      {/* Edit Modal */}
      <EditModal
        admin={selectedAdmin} // Use null if selectedAdmin is null to avoid type assertion issues
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        onSave={(updatedAdmin: Admin) => handleEdit(updatedAdmin)} // Ensure the parameter type matches
      />

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
        title="Delete Admin?"
      >
        <div className="p-4">
          <p className="mb-4">Are you sure you want to delete this admin? This action cannot be undone.</p>
          <div className="flex justify-center gap-4">
            <Button
              label="DELETE"
              onClick={() => handleDelete(selectedAdmin?.user_id || 0)}
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

      {/* Create New Admin Modal */}
      <Modal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        title="Create New Admin"
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