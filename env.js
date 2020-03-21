const GOPAMOJA_ENV = {
  production: {
    api: 'https://frontend.api.gopamoja.com/8',
    auth: 'https://auth.gopamoja.com',
  },
  staging: {
    api: 'https://test.frontend.api.gopamoja.com/8',
    auth: 'https://test.auth.gopamoja.com',
  },
  development: {
    api: 'http://192.168.1.103:3001/8',
    auth: 'https://192.168.1.103:3001',
  }
};

export const CONFIG = GOPAMOJA_ENV['development'];
