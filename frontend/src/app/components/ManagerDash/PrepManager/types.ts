export interface User {
  user_id: number;
  username: string;
  email: string | null;
  phone_number: string | null;
  role: 'prep';
  restaurant_id: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface EditModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: User) => void;
} 