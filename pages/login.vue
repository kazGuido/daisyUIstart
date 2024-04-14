<template>
  <div class="hero min-h-screen bg-base-200 relative">
    <!-- Loading Spinner -->
    <div v-if="authStore.isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="btn loading">loading</div>
    </div>
    <!-- Condition to check if not logged in -->
    <div v-if="!authStore.isLoggedIn" class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">SuperTicket !</h1>
        <p class="py-6">
          <b>Simplify your life !</b> <br>Your solution to organize your events.<br>Your place to buy <b>any ticket</b>
        </p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form @submit.prevent="handleLogin" class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" v-model="email" class="input input-bordered" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" v-model="password" class="input input-bordered" required />
            <label class="label">
              <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
    <!-- Display for logged in users -->
    <div v-else class="stats shadow">
      <div class="stat">
        <div class="stat-title">Welcome back!</div>
        <div class="stat-value">{{ authStore.user.name }}</div>
        <div class="stat-desc">Here's your quick stats:</div>
        <div class="stat-figure text-primary">
          <div class="text-4xl">89,400</div>
          <div class="text-base">Page Views</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/stores/auth'; // Ensure correct path
  import { useRouter } from 'vue-router';
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
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