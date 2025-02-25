export default interface User {
    user_id: number;
    username: string;
    password: string;
    email: string | null;
    phone_number: string | null;
    role: 'prep';
    restaurant_id: number;
    status: 'active' | 'inactive';
    created_at: string;
    updated_at: string;
}

export const UserSchema = {
    
    username: {
        in: ['body'],
        isString: true,
        isLength: {
            options: { min: 1, max: 50 },
            errorMessage: 'Username must be between 1 and 50 characters'
        }
    },
    password: {
        in: ['body'],
        isString: true,
        isLength: {
            options: { min: 6, max: 255 },
            errorMessage: 'Password must be at least 6 characters'
        },
        optional: { options: { nullable: true } } // Optional for updates
    },
    email: {
        in: ['body'],
        isEmail: {
            errorMessage: 'Must be a valid email address'
        },
        optional: { options: { nullable: true } }
    },
    phone_number: {
        in: ['body'],
        matches: {
            options: /^\+?[\d\s-]{10,15}$/,
            errorMessage: 'Must be a valid phone number'
        },
        optional: { options: { nullable: true } }
    },
    role: {
        in: ['body'],
        isIn: {
            options: [['prep']],
            errorMessage: 'Role must be prep'
        }
    },
    restaurant_id: {
        in: ['body'],
        isInt: true,
        toInt: true
    },
    status: {
        in: ['body'],
        isIn: {
            options: [['active', 'inactive']],
            errorMessage: 'Status must be active or inactive'
        },
        optional: { options: { nullable: true, defaults: 'active' } }
    }
}; 