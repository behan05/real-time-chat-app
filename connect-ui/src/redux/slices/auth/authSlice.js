import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    authProvider: 'local'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setUser: (state, action) => { 
            
        },
        logout: (state, action) => { }
    }
});
export const { setError, setLoading, setUser, logout } = authSlice.actions;
export default authSlice.reducer;