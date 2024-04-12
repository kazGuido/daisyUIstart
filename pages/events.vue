<template>
  <div class="events-container p-4">
    <h1 class="text-3xl font-bold mb-4">Events</h1>
    <!-- Loading Spinner -->
    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in events" :key="event.id" class="card w-96 glass">
        <figure>
          <img src="https://via.placeholder.com/400x200" alt="Event Image" />
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const events = ref([]);
const isLoading = ref(false);

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const loadEvents = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    events.value = data.events;
  } catch (error) {
    console.error('Fetching events failed:', error);
    setTimeout(() => {
      console.log("Retrying to fetch events...");
      loadEvents();  // Retry loading events after 3 seconds
    }, 3000);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadEvents();
});
</script>

<style scoped>
.events-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.spinner-border {
  border-color: transparent;
  border-top-color: #3490dc;  
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
