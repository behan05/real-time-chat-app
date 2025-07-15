const BASE_ENDPOINT = import.meta.env.VITE_API_URL || 'https://connect-server-rroo.onrender.com/api';

export const AUTH_API = `${BASE_ENDPOINT}/auth`;
export const SETTINGS_API = `${BASE_ENDPOINT}/settings`;
export const PROFILE_API = `${BASE_ENDPOINT}/profile`;
