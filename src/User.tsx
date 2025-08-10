import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './store/userSlice';
import type { AppDispatch } from './store/store';
import type { UserState } from './types/User';
export default function UserComponent() {
    const dispatch = useDispatch<AppDispatch>();
    const { data, status } = useSelector((state: { user: UserState }) => state.user);

    useEffect(() => {
        // Fetch user with id 1
        dispatch(fetchUser(1));
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Failed to load user</p>;

    return (
        <div>
            <h2>User Data</h2>
            {data && (
                <p>
                    {data.name} — {data.email}
                </p>
            )}
        </div>
    );
}