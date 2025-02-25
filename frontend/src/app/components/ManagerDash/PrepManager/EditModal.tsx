import React, { useState, useEffect } from 'react';
import Button from '../../Elements/Button';
import { User, EditModalProps } from './types';

const EditModal: React.FC<EditModalProps> = ({ user, isOpen, onClose, onSave }) => {
  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      setEditedUser({ ...user });
    }
  }, [user]);

  if (!isOpen || !editedUser) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => {
      if (!prev) return prev;
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedUser) {
      onSave(editedUser);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Edit User</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">×</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={editedUser.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={editedUser.email || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium mb-1">Phone</label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              value={editedUser.phone_number || ''}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status</label>
            <select
              id="status"
              name="status"
              value={editedUser.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <Button
              label="SAVE"
              onClick={() => handleSubmit(new Event('click') as unknown as React.FormEvent)}
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
        </form>
      </div>
    </div>
  );
};

export default EditModal; 