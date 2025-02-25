"use client"

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserShield } from '@fortawesome/free-solid-svg-icons';
import UserManager from '../../components/ManagerDash/UserManager/UserManager';
import AdminManager from '@/app/components/ManagerDash/AdminManager/AdminManager';

export default function AdminPage() {
    const [isUserManagement, setIsUserManagement] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold underline">MANAGE {isUserManagement ? 'USERS' : 'ADMINS'}</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setIsUserManagement(false)}
                        className={`flex items-center p-2 rounded ${!isUserManagement ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        <FontAwesomeIcon icon={faUserShield} className="mr-2" />
                        Admins
                    </button>
                    <button
                        onClick={() => setIsUserManagement(true)}
                        className={`flex items-center p-2 rounded ${isUserManagement ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        <FontAwesomeIcon icon={faUsers} className="mr-2" />
                        Users
                    </button>
                </div>
            </div>

            {isUserManagement ? 
                <UserManager hideHeading={true} /> : 
                <AdminManager hideHeading={true} />
            }
        </div>
    );
} 