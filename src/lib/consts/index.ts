export const APP_ROUTES = {
  ROOT: '',
  PRODUCTS: 'products',
  LOGIN: 'login',
  SIGNUP: 'signup',
  CONFIRM_ACCOUNT: 'confirm-account',
  REQUEST_PASSWORD_RESET: 'request-password-reset',
  CHANGE_PASSWORD: 'change-password',
  API: {
    REFRESH: ['api', 'refresh'],
  },
};

export const COOKIE_NAMES = {
  ACCESS_TOKEN: '__Host-accessToken',
  REFRESH_TOKEN: '__Secure-refreshToken',
};

export const CSRF_TOKEN_NAME = 'csrfToken';
