export interface Admin {
  user_id: number;
  username: string;
  email: string | null;
  phone_number: string | null;
  role: 'admin' | 'user' | 'owner';
  restaurant_id: number | null;
  status: 'active' | 'inactive';
  created_at: Date | null;
  updated_at: Date | null;
}

export interface EditModalProps {
  admin: Admin | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (admin: Admin) => void;
} 