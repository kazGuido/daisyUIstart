<template>
  <div class="stats shadow" v-if="authStore.user && authStore.user.username">
    <div class="stat">
      <div class="stat-title">Welcome back!</div>
      <div class="stat-value">{{ authStore.user.username }}</div>
      <div class="stat-desc">Here's your quick stats:</div>
      <div class="stat-figure text-primary">
        <div class="text-4xl">89,400</div>
        <div class="text-base">Page Views</div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>You are not logged in.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>
