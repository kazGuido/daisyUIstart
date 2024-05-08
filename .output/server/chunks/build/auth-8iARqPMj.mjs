import { o as defineStore } from './server.mjs';

const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    accessToken: null,
    isLoading: false
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.isLoggedIn = !!user;
    },
    setLoading(loading) {
      this.isLoading = loading;
    },
    logUserIn(userData, accessToken) {
      this.user = userData;
      this.accessToken = accessToken;
      this.isLoggedIn = !!userData;
    },
    logUserOut() {
      this.user = null;
      this.accessToken = null;
    },
    checkLoggedIn(apiUrl) {
      const token = this.accessToken;
      if (token) {
        this.isLoggedIn = true;
        this.fetchUserDetails(token, apiUrl);
      }
    },
    async fetchUserDetails(token, apiUrl) {
      try {
        const response = await fetch(`${apiUrl}/user`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (response.ok) {
          const userData = await response.json();
          this.setUser(userData);
        } else {
          this.logUserOut();
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
        this.logUserOut();
      }
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=auth-8iARqPMj.mjs.map
