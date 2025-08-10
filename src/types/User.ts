export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

// 2. Define slice state type
export interface UserState {
    data: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
}