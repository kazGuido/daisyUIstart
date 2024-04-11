<template>
  <div class="events-container p-4">
    <h1 class="text-3xl font-bold mb-4">Events</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="event in events" :key="event.id" class="card w-96 bg-base-100 shadow-xl">
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

// Function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

onMounted(async () => {
  try {
    const response = await fetch(
      'https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events'
    );

    // Log the full response object
    console.log(response);

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Log the response body
    console.log(data);

    events.value = data.events;
  } catch (error) {
    console.error('Fetching events failed:', error);
  }
});
</script>

<style scoped>
.events-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.event {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.event h2 {
  margin: 0;
}

.event p {
  margin: 10px 0;
}
</style>
