import http from '@utils/http';

export const api = {
  // ----- GLOBAL section -----

  login(payload: any) {
    return http.post('/login', payload);
  },
  getAccountInfo(payload: any) {
    return http.get('/account', { params: { ...payload } });
  },
};

export default api;
