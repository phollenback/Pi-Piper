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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`http://localhost:3001/users/${restaurantId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          email,
          role: 'prep',
          restaurant_id: restaurantId,
          status: 'active'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create user');
      }

      // Reset form
      setUsername('');
      setPassword('');
      setEmail('');
      onSuccess();
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Prep User">
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Username*</label>
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
          <label className="block text-sm font-medium">Password*</label>
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
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
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
            label={loading ? "Creating..." : "Create"}
            onClick={handleCreate}
            style={{
              backgroundColor: 'black',
              color: 'white',
              opacity: loading ? 0.5 : 1
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateUserModal; 