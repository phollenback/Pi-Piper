import React from 'react';
import Button from '../../Elements/Button';
import { User } from './types';

interface PrepTableProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

const PrepTable: React.FC<PrepTableProps> = ({ users, onEdit, onDelete }) => {
  if (users.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg">
        <p className="text-gray-500">No users found.</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h2 className="text-xl font-semibold">Current Users</h2>
      </div>
      <div className="overflow-x-auto">
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
                    onClick={() => onEdit(user)}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      border: '1px solid black',
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem'
                    }}
                  />
                  <Button
                    label="DELETE"
                    onClick={() => onDelete(user)}
                    style={{
                      backgroundColor: 'white',
                      color: 'red',
                      border: '1px solid red',
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem'
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrepTable; 