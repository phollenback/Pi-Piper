'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Elements/Button';

export default function AddAdmin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/managers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.name,
          phone_number: formData.number,
          password: formData.password,
          role: 'manager',
          restaurant_id: 1, // You might want to get this from context
          status: 'active',
        }),
      });

      if (response.ok) {
        router.push('/manager-dash/admin');
      }
    } catch (error) {
      console.error('Failed to create admin:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
      <div className="flex items-center mb-6">
        <button 
          onClick={() => router.back()} 
          className="mr-4"
          aria-label="Go back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Admin Management: (ADD)</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">name:</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="number" className="block text-sm font-medium mb-1">number:</label>
          <input
            id="number"
            type="tel"
            value={formData.number}
            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">password:</label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col space-y-2">
          <Button
            label="Create"
            onClick={() => {}} // Will be handled by form submit
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
          <Button
            label="Back To Login"
            onClick={() => router.push('/login')}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
          <Button
            label="VIEW ADMIN"
            onClick={() => router.push('/manager-dash/admin')}
            style={{
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black'
            }}
          />
        </div>
      </form>
    </div>
  );
} 