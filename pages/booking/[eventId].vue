<template>
<main class="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div class="card max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div class=" card-body relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{{ event.name }}</h1>
      <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Categoryname</p>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img v-if="event.images && event.images.length > 0" :src="event.images[0]" :alt="`Image of ${event.name}`" class="w-full h-60 object-cover rounded-lg" loading="lazy">
      <img v-if="event.images && event.images.length > 0" :src="event.images[0]" :alt="`Image of ${event.name}`" class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">
      <img v-if="event.images && event.images.length > 0" :src="event.images[0]" :alt="`Image of ${event.name}`" class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">
      <img v-if="event.images && event.images.length > 0" :src="event.images[0]" :alt="`Image of ${event.name}`" class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">
      <img v-if="event.images && event.images.length > 0" :src="event.images[0]" :alt="`Image of ${event.name}`" class="hidden w-full h-60 object-cover rounded-lg" loading="lazy">
    </div>
    <dl class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt class="sr-only">Reviews</dt>
      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>5 {{event.rating}}<span class="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt class="sr-only">Location</dt>
      <dd class="flex items-center">
        <svg width="2" height="2" aria-hidden="true" fill="currentColor" class="mx-3 text-slate-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        {{ event.location }}
      </dd>
    </dl>
    <div class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <form @submit.prevent="payWithPaystack" class="space-y-4">
            <input type="number" v-model="booking.quantity" min="1" max="10" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Number of Tickets">
            <button type="submit" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Buy Ticket</button> 
            <span> <span class="text-slate-400 font-normal"> </span></span>
      <button type="button" class="bg-yellow-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Add to Cart</button>
          </form>
      
      
    </div>
    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      {{ event.description }}{{ event.description }}{{ event.description }}{{ event.description }}{{ event.description }}{{ event.description }}{{ event.description }}{{ event.description }}
    </p>
  </div>
</main>

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
