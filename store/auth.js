import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isLoading: false,
    isLoggedIn: false
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isLoggedIn = !!user;
    },
    setLoading(isLoading) {
      this.isLoading = isLoading;
    },
    logOut() {
      this.user = null;
      this.isLoggedIn = false;
    }
  }
});
