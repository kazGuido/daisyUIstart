<template>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Homepage</a></li>
        <!-- Conditional Rendering for Authentication Links -->
        <li v-if="!authStore.isLoggedIn"><a href="/login">Login</a></li>
        <li v-if="authStore.isLoggedIn"><a href="/dashboard">Dashboard</a></li>
        <li v-if="authStore.isLoggedIn"><a href="/createEvent">Organize an Event</a></li>
        <li v-if="authStore.isLoggedIn" @click="logout"><a href="#">Logout</a></li>
        <li><a href="/events">Events</a></li>
      </ul>
    </div>
  </div>
  
  <div class="navbar-center">
    <a class="btn btn-ghost text-xl">SuperTicket</a>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
  <div class="hero bg-base-200 py-10">


    <NuxtPage /> <!-- The placeholder for page content -->

  
  </div>
  
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];

  import { useAuthStore } from '@/stores/auth';
  import { useRuntimeConfig } from 'nuxt/app';
  
  const { public: config } = useRuntimeConfig();
  
  const authStore = useAuthStore();
  
  const logout = () => {
    authStore.logUserOut();
    // Handle redirection or other actions here
  };
  
  
  
  // checkUser(); // Perform check on component mount
    import { ref } from 'vue';
    // import { useAuthStore } from '@/stores/auth'; // Ensure correct path
    import { useRouter } from 'vue-router';
    
    // const config = useRuntimeConfig();
    // const authStore = useAuthStore();
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    
    async function handleLogin() {
      authStore.setLoading(true);
    
      try {
        const response = await fetch(`${config.public.apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email.value, password: password.value }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        authStore.logUserIn(data); // Use logUserIn method
        router.push('/dashboard');
      } catch (error) {
        console.error('Login error:', error.message);
      } finally {
        authStore.setLoading(false);
      }
    }
    </script>
    
  
  