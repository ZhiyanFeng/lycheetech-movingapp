// API base URL
export const API_BASE_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.production.com';

// App constants
export const APP_NAME = 'LycheeTech Moving App';
export const APP_VERSION = '1.0.0';

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  THEME: '@theme',
} as const;

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  PROFILE: '/user/profile',
  UPDATE_PROFILE: '/user/profile/update',
} as const;

// Theme colors
export const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  background: {
    light: '#FFFFFF',
    dark: '#000000',
  },
  text: {
    light: '#000000',
    dark: '#FFFFFF',
  },
  border: {
    light: '#E5E5E5',
    dark: '#38383A',
  },
} as const;

// Spacing
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Font sizes
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
} as const;
