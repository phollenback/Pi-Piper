'use client';

import { useState } from 'react';
import AdminManager from './AdminManager/AdminManager';
import PrepManager from './PrepManager/PrepManager';

type ManagerType = 'admin' | 'user';

export default function UserAdminManager() {
  const [activeManager, setActiveManager] = useState<ManagerType>('admin');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveManager('admin')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeManager === 'admin'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Manage Admins
          </button>
          <button
            onClick={() => setActiveManager('user')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeManager === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Manage Users
          </button>
        </div>
        
        <div className="border-b border-gray-300 mb-6"></div>
      </div>

      {activeManager === 'admin' ? <AdminManager /> : <PrepManager />}
    </div>
  );
} 