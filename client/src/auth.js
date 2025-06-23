export const auth = {
  login(token) {
    localStorage.setItem('token', token);
  },
  logout() {
    localStorage.removeItem('token');
  },
  isAuthenticated() {
    return !!localStorage.getItem('token');
  },
  getToken() {
    return localStorage.getItem('token');
  }
};