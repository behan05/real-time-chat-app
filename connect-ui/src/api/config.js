const BASE_ENDPOINT = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const AUTH_API = `${BASE_ENDPOINT}/auth`;
export const SETTINGS_API = `${BASE_ENDPOINT}/settings`;
