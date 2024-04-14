// // stores/auth.js
// import { defineStore } from 'pinia';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isLoggedIn: false,
//     user: null,
//     isLoading: false
//   }),
//   actions: {
//     setUser(user) {
//       this.user = user;
//       this.isLoggedIn = !!user; // Set isLoggedIn based on whether user is non-null
//     },
//     setLoading(loading) {
//       this.isLoading = loading;
//     },
//     logUserIn(user) {
//       this.setUser(user);
//     },
//     logUserOut() {
//       localStorage.removeItem('token');
//       this.setUser(null);
//     },
//     checkLoggedIn() {
//       const token = localStorage.getItem('token');
//       if (token) {
//         this.isLoggedIn = true;
//         this.fetchUserDetails(); // Potentially re-fetch user details
//       }
//     },
//     async fetchUserDetails() {
//       // Assume you have a valid endpoint and token is stored in Authorization headers globally or is added here
//       const response = await fetch('https://api.yourdomain.com/user');
//       if (response.ok) {
//         const userData = await response.json();
//         this.setUser(userData);
//       } else {
//         this.logUserOut();
//       }
//     }
//   }
// });
// import { defineStore } from 'pinia';

// const config = useRuntimeConfig();

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     isLoggedIn: false,
//     user: null,
//     isLoading: false
//   }),
//   actions: {
//     setUser(user) {
//       this.user = user;
//       this.isLoggedIn = !!user;
//     },
//     setLoading(loading) {
//       this.isLoading = loading;
//     },
//     logUserIn(user) {
//       this.setUser(user);
//     },
//     logUserOut() {
//       localStorage.removeItem('token');  // Clear stored token
//       this.setUser(null);               // Clear user state
//     },
//     checkLoggedIn(apiUrl) {
//       const token = localStorage.getItem('token');
//       if (token) {
//         this.isLoggedIn = true;
//         this.fetchUserDetails(token, apiUrl);
//       }
//     },
//     async fetchUserDetails(token, apiUrl) {
//       try {
//         const response = await fetch(`${apiUrl}/user`, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         if (response.ok) {
//           const userData = await response.json();
//           this.setUser(userData);
//         } else {
//           this.logUserOut();
//         }
//       } catch (error) {
//         console.error('Failed to fetch user details', error);
//         this.logUserOut();
//       }
//     }
//   }
// });
// stores/auth.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
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
    logUserIn(user) {
      this.setUser(user);
    },
    logUserOut() {
      localStorage.removeItem('token');
      this.setUser(null);
    },
    checkLoggedIn(apiUrl) {
      const token = localStorage.getItem('token');
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
        console.error('Failed to fetch user details', error);
        this.logUserOut();
      }
    }
  }
});
