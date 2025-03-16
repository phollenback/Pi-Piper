import React, { useState } from 'react';
import Button from '../../Elements/Button';
import Modal from '../../Elements/Modal';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          phone_number: phoneNumber,
          role: 'prep', // Hardcoded to 'prep'
          restaurant_id: restaurantId
        }),
      });

      if (response.ok) {
        onSuccess();
        onClose();
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to create user');
      }
    } catch (err) {
      setError('An error occurred while creating the user');
      console.error(err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New User">
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter username"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Password</label>
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter email"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter phone number"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex justify-end space-x-2">
          <Button
            label="Cancel"
            onClick={onClose}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
          <Button
            label="Create"
            onClick={handleCreate}
            style={{
              backgroundColor: 'black',
              color: 'white'
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserModal; 