import { PROFILE_API } from '@/api/config';
import axios from 'axios';
import { setLoading, setError, setProfileData } from './profileSlice';
import { getAuthHeaders } from '@/utils/authHeaders';

// Get Profile
export function getProfile() {
    return async (dispatch) => {
        const headers = getAuthHeaders();

        if (!headers) {
            dispatch(setError('No token found. Please log in.'));
            return { success: false };
        }

        dispatch(setLoading());

        try {
            const response = await axios.get(`${PROFILE_API}/my-profile`, { headers });

            if (response.status === 200) {
                dispatch(setProfileData(response.data.profile));
                return { success: true };
            } else {
                dispatch(setError('Failed to fetch profile data.'));
                return { success: false };
            }
        } catch (error) {
            dispatch(
                setError(
                    error?.response?.data?.error || 'An error occurred while fetching profile data.'
                )
            );
            return { success: false , error: error?.response?.data?.error || 'An error occurred while fetching profile data.' };
        }
    };
}

// Update General Info
export function updateGeneralInfo(formData) {
    return async (dispatch) => {
        const headers = getAuthHeaders();

        if (!headers) {
            dispatch(setError('No token found. Please log in.'));
            return { success: false };
        }

        dispatch(setLoading());

        try {
            const response = await axios.post(`${PROFILE_API}/general-info`, formData, { headers });

            if (response.status === 200) {
                dispatch(setProfileData(response.data.profile));
                return { success: true, message: response.data.message || "Profile updated successfully!" };
            }
        } catch (error) {
            dispatch(
                setError(
                    error?.response?.data?.error || 'An error occurred while updating general info.'
                )
            );
            return { success: false, error: error?.response?.data?.error || 'An error occurred while updating general info.'};
        }
    };
}

// Update Matching Preferences
export function updateMatchingPreferences(formData) {
    return async (dispatch) => {
        const headers = getAuthHeaders();
        if (!headers) {
            dispatch(setError('No token found. Please log in.'));
            return { success: false };
        }

        dispatch(setLoading());

        try {
            const response = await axios.post(`${PROFILE_API}/matching-preferences`, formData, {
                headers,
            });

            if (response.status === 200) {
                dispatch(setProfileData(response.data.profile));
                return { success: true, message: response.data.message || "Matching preferences updated successfully!" };
            }
            
        } catch (error) {
            dispatch(
                setError(
                    error?.response?.data?.error ||
                    'An error occurred while updating matching preferences.'
                )
            );
            return { success: false, error: error?.response?.data?.error || 'An error occurred while updating matching preferences.' };
        }
    };
}

// Update Tags and Interests
export function updateTagsAndInterests(formData) {
    return async (dispatch) => {
        const headers = getAuthHeaders();
        if (!headers) {
            dispatch(setError('No token found. Please log in.'));
            return { success: false };
        }

        dispatch(setLoading());

        try {
            const response = await axios.post(`${PROFILE_API}/tags-and-interests`, formData, {
                headers,
            });

            if (response.status === 200) {
                dispatch(setProfileData(response.data.profile));
                return { success: true };
            }
        } catch (error) {
            dispatch(
                setError(
                    error?.response?.data?.error ||
                    'An error occurred while updating tags and interests.'
                )
            );
            return { success: false };
        }
    };
}
