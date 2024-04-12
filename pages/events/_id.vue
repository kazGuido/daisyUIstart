<template>
  <div class="container mx-auto p-4">
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
        <button class="btn btn-primary" @click="bookEvent(event.id)">Book Now</button>
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

onMounted(async () => {
  const { data } = await useFetch(`/api/events/${route.params.id}`)
  event.value = data.value
})

const bookEvent = (eventId) => {
  // Navigation logic to booking page
  // This can be direct navigation or modal popup for booking
  console.log('Booking event', eventId)
}
</script>

<script>
export default {
  filters: {
    formatDate(value) {
      if (value) {
        return new Date(value).toLocaleDateString('en-US')
      }
    }
  }
}
</script>
