import { useState, useEffect } from 'react';
import { getAuthToken, removeAuthToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  username: string;
  role: 'manager' | 'prep';
  restaurant_id: number;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getAuthToken();
      
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          removeAuthToken();
        }
      } catch (error) {
        removeAuthToken();
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const logout = () => {
    removeAuthToken();
    setUser(null);
    router.push('/login');
  };

  return { user, loading, logout };
} 