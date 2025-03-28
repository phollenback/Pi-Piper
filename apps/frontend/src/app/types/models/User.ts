export interface User {
    user_id: number;
    username: string;
    email: string | null;
    phone_number: string | null;
    role: 'user' | 'admin' | 'owner';
    restaurant_id: number | null;
    status: 'active' | 'inactive';
    created_at: Date | null;
    updated_at: Date | null;
    first_name?: string;
    last_name?: string;
} 