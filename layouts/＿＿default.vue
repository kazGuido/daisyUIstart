<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-lg font-bold">SuperTicket</a>
        <div class="flex items-center">
          <nuxt-link to="/" class="text-white px-3 py-2 rounded hover:bg-gray-700">Home</nuxt-link>
          <nuxt-link to="/events" class="text-white px-3 py-2 rounded hover:bg-gray-700">Events</nuxt-link>
          <template v-if="authStore.isLoggedIn">
            <nuxt-link to="/dashboard" class="text-white px-3 py-2 rounded hover:bg-gray-700">Dashboard</nuxt-link>
            <button @click="logout" class="ml-4 px-3 py-2 rounded bg-red-500 hover:bg-red-600">Logout</button>
          </template>
          <template v-else>
            <nuxt-link to="/login" class="text-white px-3 py-2 rounded hover:bg-gray-700">Login</nuxt-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <main class="flex-grow container mx-auto px-4 py-6">
      <Nuxt />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        © 2024 SuperTicket. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.logUserOut()
  router.push('/login')
}
</script>

<style>
/* Additional styles can be added here */
</style>
