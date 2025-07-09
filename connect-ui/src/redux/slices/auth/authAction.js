import axios from "axios";
import { logout as logoutReducer } from "./authSlice";
import { setError, setLoading, setUser } from './authSlice';
import { API_ENDPOINT } from '../../../api/config';

export function register(formData) {

    // Redux Thunk middleware
    return async (dispatch) => {
        dispatch(setLoading());

        try {
            await axios.post(`${API_ENDPOINT}/register`, formData);
            return { success: true };
        } catch (err) {
            const errorMessage = err.response?.data?.error || "Signup failed";
            dispatch(setError(errorMessage));
            return { success: false, message: errorMessage };
        }
    }
};

export function login(formData) {

    // Redux Thunk middleware
    return async (dispatch) => {
        dispatch(setLoading(true));

        try {
            let response = await axios.post(`${API_ENDPOINT}/login`, formData);
            const { user, token } = response.data;
            dispatch(setUser({
                user,
                token
            }));

            // Store in localStorage
            localStorage.setItem('token', token);
            return { success: true }

        } catch (err) {
            const errorMessage = err.response?.data?.error || "Login failed"
            dispatch(setError(errorMessage))
            return { success: false, message: errorMessage };
        }
    }
}

export function logout() {
    return (dispatch) => {
        localStorage.removeItem('token');
        dispatch(logoutReducer());
    }
}