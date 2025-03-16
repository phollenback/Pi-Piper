'use client';

import { useState } from 'react';
import Button from '../../Elements/Button';
import { Admin, EditModalProps } from './types';

export default function EditModal({ admin, isOpen, onClose, onSave }: EditModalProps) {
  const [editedAdmin, setEditedAdmin] = useState<Admin>(admin || {
    user_id: 0,
    username: '',
    email: null,
    phone_number: null,
    role: 'manager',
    restaurant_id: 1,
    status: 'active',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  });

  if (!isOpen || !admin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Edit Admin</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={editedAdmin.username}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, username: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Enter username"
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
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
            <input
              id="phone"
              type="tel"
              value={editedAdmin.phone_number || ''}
              onChange={(e) => setEditedAdmin({ ...editedAdmin, phone_number: e.target.value })}
              className="w-full p-2 border rounded"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              label="SAVE"
              onClick={() => onSave(editedAdmin)}
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
} 