export interface Admin {
  user_id: number;
  username: string;
  email: string | null;
  phone_number: string | null;
  role: 'owner' | 'manager' | 'prep';
  restaurant_id: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface EditModalProps {
  admin: Admin | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (admin: Admin) => void;
} 