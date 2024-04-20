<template>
  <div class="bg-white">
    <div class="pt-6">
      <!-- Breadcrumb Navigation -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <a href="/" class="text-sm font-medium text-gray-900">Home</a>
          </li>
          <li v-if="event" class="text-sm font-medium text-gray-500">{{ event.name }}</li>
        </ol>
      </nav>

      <!-- Image Gallery -->
      <div v-if="event && event.images.length" class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div v-for="(image, index) in event.images" :key="index" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img :src="image" :alt="event.name" class="object-cover object-center">
        </div>
      </div>

      <!-- Event Info & Booking Form -->
      <div v-if="event" class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <!-- Event Details -->
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold text-gray-900">{{ event.name }}</h1>
          <p class="text-xl text-gray-900">{{ event.date }}</p>
          <p class="mt-4 text-gray-500">{{ event.description }}</p>
          <p class="mt-4 text-lg text-gray-900">Price: {{ event.price }} {{ event.currency }}</p>
        </div>

        <!-- Booking Section -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <form @submit.prevent="payWithPaystack">
            <h2 class="text-lg font-medium text-gray-900">Book Your Tickets</h2>
            <div class="mt-2">
              <input type="number" v-model="booking.quantity" min="1" max="10" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Number of Tickets">
            </div>
            <button type="submit" class="mt-4 flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useFetch } from '#app';

const route = useRoute();
const eventId = route.params.eventId;  // Access the eventId from the URL parameters
const { data: event } = useFetch(`https://8f7532c3-ae66-446a-9029-19b1eeebab3b-00-30hfb3eka4tfa.kirk.replit.dev/events/${eventId}`);

// const { data: event } = useFetch('1');  // Adjust the URL to your backend API
const booking = ref({
  quantity: 1
});

const payWithPaystack = () => {
  if (!event.value) return;

  const handler = PaystackPop.setup({
    key: 'pk_test_35d147ab629a9ccb014d192254e94403fe934449',  // Replace with your actual Paystack public key
    email: `customer@example.com`,  // Assume the customer's email is set
    amount: event.value.price * booking.value.quantity * 100,
    currency: "XOF",  // Dynamic currency
    onClose: () => alert('Window closed.'),
    callback: (response) => alert(`Payment complete! Reference: ${response.reference}`)
  });
  handler.openIframe();
};

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://js.paystack.co/v1/inline.js";
  document.body.appendChild(script);
});
</script>
