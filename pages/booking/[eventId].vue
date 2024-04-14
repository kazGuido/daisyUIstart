<template>
  <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <a href="#" class="text-sm font-medium text-gray-900">Home</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </li>
          <li class="text-sm">
            <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ event.name }}</a>
          </li>
        </ol>
      </nav>

  <div class="bg-white">
    <div class="pt-6">
      <!-- Event Title and Breadcrumb -->
      

      <!-- Image Gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden lg:block">
          <img src="https://via.placeholder.com/400x300" :alt="event.name" class="object-cover object-center" />
        </div>
        <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" :alt="event.name" class="object-cover object-center" />
        </div>
        <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <img src="https://via.placeholder.com/400x300" :alt="event.name" class="object-cover object-center" />
        </div>
      </div>

      <!-- Event Info & Booking Form -->
      <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <!-- Event Details -->
        <div class="lg:col-span-2 lg:pr-8">
          <h1 class="text-2xl font-bold text-gray-900">{{ event.name }}</h1>
          <p class="text-3xl text-gray-900">{{ event.date }}</p>
          <p class="mt-4 text-gray-500">{{ event.description }}</p>
        </div>

        <!-- Booking Section -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <form @submit.prevent="submitBooking">
            <h2 class="text-lg font-medium text-gray-900">Book Your Tickets</h2>
            <div class="mt-2">
              <input type="number" v-model="booking.quantity" min="1" max="10" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Number of Tickets">
            </div>
            <!-- <button  class="button is-primary">Payer maintenant</button> -->
            <button type="submit" @click="payWithPaystack" class="mt-4 flex w-full items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Book Now</button>
          </form>
        </div>

      </div>
    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';

const event = ref({
  name: "Live Concert",
  date: "2024-04-22",
  description: "Join us for a night of spectacular performances and unforgettable memories.",
  images: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg"
  ]
});

const booking = ref({
  quantity: 1
});

function submitBooking() {
  alert(`Booking ${booking.value.quantity} tickets for ${event.value.name}`);
}

export default {
  methods: {
    payWithPaystack() {
      const currentDateTime = new Date().toISOString();
      const customerEmail = `customer_${currentDateTime}@mycompany.com`.replace(/:/g, '-');

      let handler = PaystackPop.setup({
        key: 'pk_test_35d147ab629a9ccb014d192254e94403fe934449', // Replace with your public key
        email: customerEmail,
        amount: 10000 * 100, // Amount in smallest currency unit
        currency: 'XOF',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        onClose: () => {
          alert('Window closed.');
        },
        callback: (response) => {
          let message = 'Payment complete! Reference: ' + response.reference;
          alert(message);
        }
      });

      handler.openIframe();
    }
  }
}
</script>
