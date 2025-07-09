import axios from "axios";
import { logout as logoutReducer } from "./authSlice";
import { setError, setLoading, setUser } from './authSlice';
import { API_ENDPOINT } from '../../../api/config';

export function register(formData) {

    return async (dispatch) => {
        dispatch(setLoading());

        try {
            await axios.post(`${API_ENDPOINT}/register`, formData);
            return { success: true };

        } catch (err) {
            dispatch(setError(err.response?.data?.error || "Signup failed"));
            return { success: false }; 
        }
    }
}

export function login(formData) {

}

export function logout() {

}