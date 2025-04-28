import React from 'react';
import Button from '../../Elements/Button';
import { Admin } from './types';

interface AdminTableProps {
  admins: Admin[];
  onEdit: (admin: Admin) => void;
  onDelete: (admin: Admin) => void;
}

export default function AdminTable({ admins, onEdit, onDelete }: AdminTableProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h2 className="text-xl font-semibold">Current Managers</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left w-16">ID</th>
            <th className="p-4 text-left">Username</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.user_id} className="border-b">
              <td className="p-4">{admin.user_id}</td>
              <td className="p-4">{admin.username}</td>
              <td className="p-4">{admin.email || '-'}</td>
              <td className="p-4">{admin.role}</td>
              <td className="p-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  admin.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {admin.status}
                </span>
              </td>
              <td className="p-4 text-right space-x-2">
                <Button
                  label="EDIT"
                  onClick={() => onEdit(admin)}
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black'
                  }}
                />
                <Button
                  label="DELETE"
                  onClick={() => onDelete(admin)}
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
  );
} 