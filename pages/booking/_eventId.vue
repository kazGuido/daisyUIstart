<template>
  <div class="container mx-auto p-4">
    <div class="flex flex-wrap md:flex-nowrap gap-4">
      <!-- Event Description Card -->
      <div class="flex-1">
        <div class="card w-full bg-base-100 shadow-xl">
          <figure><img :src="event.image || 'https://via.placeholder.com/400x200'" alt="Event Image" /></figure>
          <div class="card-body">
            <h2 class="card-title">{{ event.name }}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <p>{{ event.description }}</p>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Date: {{ event.date | formatDate }}</div>
              <div class="badge badge-outline">Location: {{ event.location }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Booking Form -->
      <div class="flex-1">
        <div class="card w-full bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Book Tickets</h2>
            <form @submit.prevent="submitBooking">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Select Quantity</span>
                </label>
                <select v-model="booking.quantity" class="select select-bordered w-full max-w-xs">
                  <option disabled value="">Select number</option>
                  <option v-for="n in availableTickets" :key="n" :value="n">{{ n }}</option>
                </select>
              </div>
              <div class="form-control mt-4">
                <button class="btn btn-primary" type="submit">Submit Booking</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from 'nuxt/app'

const route = useRoute()
const event = ref(null)
const booking = ref({
  quantity: 1,
})
const availableTickets = ref([])

onMounted(async () => {
  const { data } = await useFetch(`/api/events/${route.params.id}`)
  event.value = data.value
  availableTickets.value = Array.from({length: event.value.tickets_remaining}, (_, i) => i + 1)
})

const submitBooking = async () => {
  // API call to submit booking
  console.log('Submitting booking for', event.value.name, 'Quantity:', booking.value.quantity)
}

function formatDate(value) {
  if (value) {
    return new Date(value).toLocaleDateString('en-US')
  }
}
</script>
