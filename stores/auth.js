// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
    isLoading: false  // Initial loading state is false
  }),
  actions: {
    setUser(user) {  // Method to set the user and update login status
      this.isLoggedIn = true;
      this.user = user;
    },
    logUserIn(user) {
      this.isLoggedIn = true;
      this.user = user;
    },
    logUserOut() {
      this.isLoggedIn = false;
      this.user = null;
    },
    setLoading(loading) {
      this.isLoading = loading; // Set the loading state
    }
  }
});
