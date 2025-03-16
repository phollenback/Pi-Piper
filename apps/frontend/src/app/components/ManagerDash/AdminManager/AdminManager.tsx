'use client';

import { useState, useEffect } from 'react';
//import { useRouter } from 'next/navigation';
import Button from '../../Elements/Button';
import AdminTable from './AdminTable';
import EditModal from './EditModal';
import Modal from '../../Elements/Modal';
import { Admin } from './types';
import { getManagers, createManager, updateManager, deleteManager } from '../../../actions/managerActions';

export default function AdminManager({ hideHeading = false }) {
  // const router = useRouter();
  const RESTAURANT_ID = 1;
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [successModal, setSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    email: '',
    phone_number: '',
    role: 'manager' as const,
    restaurant_id: RESTAURANT_ID,
    status: 'active' as const
  });

  useEffect(() => {
    fetchManagers();
  }, []);

  const fetchManagers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getManagers(RESTAURANT_ID);
      setAdmins(data);
    } catch (error) {
      console.error('Failed to fetch managers:', error);
      setError(error instanceof Error ? error.message : 'Failed to load managers');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (updatedAdmin: Admin) => {
    setLoading(true);
    setError(null);
    console.log('Sending update request with data:', updatedAdmin);
    
    // Create a copy of the admin object without read-only properties
    const adminToUpdate = {
      username: updatedAdmin.username,
      email: updatedAdmin.email,
      phone_number: updatedAdmin.phone_number,
      role: updatedAdmin.role,
      restaurant_id: updatedAdmin.restaurant_id,
      status: updatedAdmin.status
    };

    try {
      await updateManager(updatedAdmin.user_id, adminToUpdate);
      
      // Refresh the manager list to get the latest data
      await fetchManagers();
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
      await createManager(newUser);
      
      // Refresh the manager list to include the new manager
      await fetchManagers();
      setCreateModal(false);
      setNewUser({
        username: '',
        password: '',
        email: '',
        phone_number: '',
        role: 'manager',
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
      await deleteManager(managerId);
      
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
          admins={admins}
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
        admin={selectedAdmin}
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        onSave={handleEdit}
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