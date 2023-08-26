export const APP_ROUTES = {
  ROOT: '',
  PRODUCTS: 'products',
  LOGIN: 'login',
  SIGNUP: 'signup',
  CONFIRM_ACCOUNT: 'confirm-account',
  REQUEST_PASSWORD_RESET: 'request-password-reset',
  CHANGE_PASSWORD: 'change-password',
  CHECKOUT: {
    INFORMATION: ['checkout', 'information'],
    SHIPPING: ['checkout', 'shipping'],
    BILLING: ['checkout', 'billing'],
    PAYMENT: ['checkout', 'payment'],
  },
  API: {
    REFRESH: ['api', 'refresh'],
  },
};
