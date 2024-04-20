<template>
  <div class="bg-white min-h-screen">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-900">Events</h1>
        <div class="flex space-x-2">
          <div v-for="category in categories" :key="category" class="form-checkbox">
            <label class="inline-flex items-center">
              <input type="checkbox" class="checkbox checkbox-primary" :value="category" v-model="selectedCategories" @change="loadEvents">
              <span class="ml-2 text-sm text-gray-600">{{ category }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="event in events" :key="event.id" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img v-if="event.images.length > 0" :src="event.images[0]" alt="Event image" class="h-full w-full object-cover object-center">
            <img v-else src="https://via.placeholder.com/400x200" alt="No Event Image Available" class="h-full w-full object-cover object-center">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <nuxt-link :to="`/booking/${event.id}`" class="hover:underline">
                  {{ event.name }}
                </nuxt-link>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ event.location }}</p>
              <p class="text-xs text-gray-500">Date: {{ formatDate(event.date) }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm font-medium text-gray-900">{{ event.tickets_remaining }} tickets left</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination Controls -->
      <div class="pagination flex space-x-2 mt-8 justify-center">
        <button @click="changePage(currentPage - 1)" class="btn" :class="{ 'btn-disabled': currentPage === 1 }">Prev</button>
        <button v-for="page in pagesToShow" @click="changePage(page)" :key="page" class="btn" :class="{ 'btn-active': currentPage === page }">{{ page }}</button>
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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const loadEvents = async () => {
  isLoading.value = true;
  try {
    const url = new URL('https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events');
    const params = { page: currentPage.value, per_page: 10, categories: selectedCategories.value.join(',') };
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    events.value = data.events;
    categories.value = data.list_of_categories; // Assumes API returns this structure
    totalPages.value = data.pages;
  } catch (error) {
    console.error('Fetching events failed:', error);
  } finally {
    isLoading.value = false;
  }
};

const changePage = (newPage) => {
  currentPage.value = Math.min(Math.max(newPage, 1), totalPages.value);
  loadEvents();
};

const pagesToShow = computed(() => {
  let start = Math.max(currentPage.value - 2, 1);
  let end = Math.min(start + 4, totalPages.value);
  start = Math.max(1, end - 4);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

onMounted(() => {
  loadEvents();
});
</script>
