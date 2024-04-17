<template>
  <div class="card w-10/12 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div class="card-body glass events-container p-4">
    
    <h1 class="text-3xl font-bold mb-4">Events</h1>
    <!-- Category Filter -->
    <div class="flex flex-wrap gap-2">
      <div v-for="category in categories" :key="category" class="form-control">
        <label class="cursor-pointer label flex gap-2 items-center">
        
          <input type="checkbox" class="checkbox checkbox-xs" :value="category" v-model="selectedCategories" @change="loadEvents">
          <span class="label-text">{{ category }}</span>
        </label>
      </div>
    </div>
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    
      
    <!-- <div class="card  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> -->
      <div class="card w-64 bg-base-100 shadow-xl">
      <div v-for="event in events" :key="event.id" class="card-body">
        <nuxt-link :to="`/booking/${event.id}`">
          <figure v-if="event.images.length > 0">
            <img :src="event.images[0]" alt="Event Image" />
          </figure>
          <figure v-else>
            <img src="https://via.placeholder.com/400x200" alt="No Event Image Available" />
          </figure>
        
        <div class="card-body">
          <h2 class="card-title">
            {{ event.name }}
            <div class="badge badge-secondary">NEW</div>
          </h2>
          <p>{{ event.description }}</p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Date: {{ formatDate(event.date) }}</div>
            <div class="badge badge-outline">Location: {{ event.location }}</div>
          </div>
          <div class="justify-start pt-4">
            <div class="badge badge-info">Tickets Remaining: {{ event.tickets_remaining }}</div>
          </div>
        </div>
      </nuxt-link>
      </div>
    </div>
    <!-- Pagination Controls -->
    <div class="pagination flex space-x-2 mt-4 justify-center">

      <button @click="changePage(currentPage - 1)" class="btn" :class="{ 'btn-disabled': currentPage === 1 }">Prev</button>
      <button @click="changePage(page)" class="join-item btn" v-for="page in pagesToShow" :key="page" :class="{ 'btn-active': currentPage === page }">{{ page }}</button>
      <button @click="changePage(currentPage + 1)" class="btn" :class="{ 'btn-disabled': currentPage >= totalPages }">Next</button>

    </div>
  </div>
    
  </div>
</template>
<script setup>
  import { ref, onMounted, computed } from 'vue';
  
  const events = ref([]);
  const categories = ref([]);
  const selectedCategories = ref([]);
  const isLoading = ref(false);
  const currentPage = ref(1);
  const totalPages = ref(0);
  
  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  // Load events from the API
  const loadEvents = async () => {
    isLoading.value = true;
    try {
      const url = new URL('https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events');
      const params = { 
        page: currentPage.value, 
        per_page: 10, 
        categories: selectedCategories.value.join(',') // Handle multiple categories
      };
      url.search = new URLSearchParams(params).toString();
  
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      events.value = data.events;
      categories.value = data.list_of_categories; // Assume categories come with each request
      totalPages.value = data.pages;
    } catch (error) {
      console.error('Fetching events failed:', error);
    } finally {
      isLoading.value = false;
    }
  };
  
  // Handle pagination
  const changePage = (newPage) => {
    currentPage.value = Math.min(Math.max(newPage, 1), totalPages.value);
    loadEvents();
  };
  
  // Computed property to handle pagination
  const pagesToShow = computed(() => {
    let start = Math.max(currentPage.value - 2, 1);
    let end = Math.min(start + 4, totalPages.value);
    start = Math.max(1, end - 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });
  
  // Initial data fetch on mount
  onMounted(() => {
    loadEvents();
  });
  </script>
  