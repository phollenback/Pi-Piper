'use client';

import { useState, useEffect } from 'react';
import Button from '../../Elements/Button';
import { Admin, EditModalProps } from './types';
import Modal from '../../Elements/Modal';

export default function EditModal({ admin, isOpen, onClose, onSave }: EditModalProps) {
  const [editedAdmin, setEditedAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    if (admin) {
      setEditedAdmin({ ...admin });
    }
  }, [admin]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedAdmin) {
      onSave(editedAdmin);
    }
  };

  if (!isOpen || !editedAdmin) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Edit Admin">
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username*</label>
            <input
              id="username"
              type="text"
              value={editedAdmin.username}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, username: e.target.value })}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={editedAdmin.email || ''}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, email: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">Role*</label>
            <select
              id="role"
              value={editedAdmin.role}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, role: e.target.value as 'admin' | 'user' })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">Status*</label>
            <select
              id="status"
              value={editedAdmin.status}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, status: e.target.value as 'active' | 'inactive' })}
              className="w-full p-2 border rounded"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 rounded border border-black text-black bg-white hover:bg-gray-100"
            >
              SAVE
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
} 