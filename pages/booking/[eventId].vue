<template>
  <div v-if="pending">
    <p>Loading event details...</p>
  </div>
  <div v-else-if="event" class="bg-white">
    <div class="pt-6">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <nuxt-link to="/" class="text-sm font-medium text-gray-900">Home</nuxt-link>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </li>
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ event.name }}</a>
          </li>
        </ol>
      </nav>
      <!-- Image Gallery -->
      <div class="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div v-for="(image, index) in event.images" :key="index" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img :src="image" :alt="event.name" class="object-cover object-center" />
        </div>
      </div>
      <!-- Event Info & Booking Form -->
      <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <!-- Event Details -->
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold text-gray-900">{{ event.name }}</h1>
          <p class="text-xl text-gray-900">{{ event.date | formatDate }}</p>
          <p class="mt-4 text-gray-500">{{ event.description }}</p>
        </div>
        <!-- Booking Section -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <form @submit.prevent="submitBooking">
            <h2 class="text-lg font-medium text-gray-900">Book Your Tickets</h2>
            <div class="mt-2">
              <input type="number" v-model="booking.quantity" min="1" max="event.tickets_remaining" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Number of Tickets">
            </div>
            <button type="submit" @click="payWithPaystack" class="mt-4 flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Event details could not be loaded.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useAsyncData } from '#imports';
import { useRoute } from 'vue-router';

const route = useRoute();
const booking = ref({
  quantity: 1
});

const { data: event, pending, error, refresh } = useAsyncData(() => {
  const eventId = route.params.eventId; // Ensure your route has a param named 'id'
  return $fetch(`https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events/${eventId}`);
}, {
  watch: [route.params.eventId] // Reactively refetch the data when route params change
});

function submitBooking() {
  alert(`Booking ${booking.value.quantity} tickets for ${event.value.name}`);
}

// Function to initiate payment with Paystack
function payWithPaystack() {
  // Ensure the event data and booking quantity are defined
  if (!event.value || booking.value.quantity < 1) {
    alert('Invalid event data or quantity.');
    return;
  }
  
  const currentDateTime = new Date().toISOString();
  const customerEmail = `customer_${currentDateTime}@mycompany.com`.replace(/:/g, '-');
  let handler = PaystackPop.setup({
    key: 'pk_test_yourkey', // Replace with your public key
    email: customerEmail,
    amount: 10000 * booking.value.quantity, // Calculate based on quantity and some base price
    currency: 'XOF',
    onClose: () => alert('Transaction was not completed.'),
    callback: (response) => {
      alert(`Payment complete! Reference: ${response.reference}`);
    }
  });
  handler.openIframe();
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
</script>
