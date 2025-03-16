'use client';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/lib/store';
import { useEffect } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useSelector((state: RootState) => state.auth);
  
  useEffect(() => {
    // Apply theme to CSS variables
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-accent', theme.accent);
  }, [theme]);
  
  return <>{children}</>;
} 