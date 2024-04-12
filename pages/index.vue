<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse" v-if="!authStore.isLoggedIn">
      <!-- Loading Spinner -->
      <div v-if="authStore.isLoading" class="btn loading">loading</div>
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form class="card-body" @submit.prevent="handleLogin">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" class="input input-bordered" v-model="email" required />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" class="input input-bordered" v-model="password" required />
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
    <div class="stats shadow" v-else>
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
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

function handleLogin() {
  authStore.setLoading(true);
  // Here you would make your API request
  setTimeout(() => {
    // Simulating API response
    authStore.setUser({ id: 1, name: 'John Doe', email: email.value });
    authStore.setLoading(false);
  }, 2000);
}
</script>