<template>
  <div class="hero min-h-screen bg-base-200">
    <div v-if="!authStore.isLoggedIn" class="hero-content flex-col lg:flex-row-reverse">
      <!-- Loading Spinner -->
      <div v-if="authStore.isLoading" class="btn loading">loading</div>
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          <b>Seamless Booking Process:</b> <br>Our intuitive interface guides you through the booking process step-by-step, ensuring a smooth and efficient experience.
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
    <!-- Welcome Message -->
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
  import { useAuthStore } from '@/stores/auth';  // Ensure correct path
  import { useRuntimeConfig } from '#imports';
  import { useRouter } from 'vue-router';
  
  const config = useRuntimeConfig();
  const router = useRouter();
  const authStore = useAuthStore();
  const email = ref('');
  const password = ref('');
  
  async function handleLogin() {
    authStore.setLoading(true);  // Begin loading
  
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
      authStore.setUser(data);  // Set user data on successful login
      router.push('/dashboard');  // Navigate to dashboard
    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      authStore.setLoading(false);  // End loading
    }
  }
  </script>
  
