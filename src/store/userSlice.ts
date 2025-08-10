import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { User, UserState } from '../types/User';

// 3. Initial state
const initialState: UserState = {
    data: null,
    status: 'idle',
};

// 4. Async thunk
export const fetchUser = createAsyncThunk<User, number>(
    'user/fetchUser',
    async (id: number) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return (await res.json()) as User;
    }
);

// 5. Slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default userSlice.reducer;