<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <!-- List of Events -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        <div v-for="event in events" :key="event.id" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <img v-if="event.images.length > 0" :src="event.images[0]" alt="Event image" class="h-full w-full object-cover object-center">
            <img v-else src="https://via.placeholder.com/400x300" alt="No Event Image Available" class="h-full w-full object-cover object-center">
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
            <p class="text-sm font-medium text-gray-900">{{ event.tickets_remaining }} tickets left</p>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
          <button @click="changePage(currentPage - 1)" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">Previous</button>
          <button @click="changePage(currentPage + 1)" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" :class="{ 'opacity-50 cursor-not-allowed': currentPage >= totalPages }">Next</button>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <!-- <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">{{ (currentPage - 1) * perPage + 1 }}</span>
              to
              <span class="font-medium">{{ Math.min(currentPage * perPage, totalItems) }}</span>
              of
              <span class="font-medium">{{ totalItems }}</span>
              results
            </p> -->
          </div>
          <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <button @click="changePage(currentPage - 1)" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-sm text-gray-400 hover:text-gray-500" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </button>
              <!-- Numbers dynamically -->
              <button v-for="page in pagesToShow" :key="page" @click="changePage(page)" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50" :class="{ 'bg-indigo-600 text-white': currentPage === page }">{{ page }}</button>
              <button @click="changePage(currentPage + 1)" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-sm text-gray-400 hover:text-gray-500" :class="{ 'opacity-50 cursor-not-allowed': currentPage >= totalPages }">
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
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
