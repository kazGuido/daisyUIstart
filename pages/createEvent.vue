<template>
  <div class="container mx-auto p-4">
    <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <div class="card-body">
        <h1 class="text-4xl font-bold mb-6">Create an Event</h1>
    <form @submit.prevent="submitEvent" class="form-control w-full max-w-xs" enctype="multipart/form-data">
      <!-- Event Name -->
      <label class="label">
        <span class="label-text">Event Name</span>
      </label>
      <input type="text" v-model="event.name" placeholder="Event Name" class="input input-bordered w-full max-w-xs" required />

      <!-- Event Description -->
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <textarea v-model="event.description" placeholder="Description" class="textarea textarea-bordered h-24" required></textarea>

      <!-- Event Date -->
      <label class="label">
        <span class="label-text">Date</span>
      </label>
      <input type="date" v-model="event.date" class="input input-bordered w-full max-w-xs" required />

      <!-- Event Location -->
      <label class="label">
        <span class="label-text">Location</span>
      </label>
      <input type="text" v-model="event.location" placeholder="Location" class="input input-bordered w-full max-w-xs" required />

      <!-- Event Image -->
      <label class="label">
        <span class="label-text">Event Image</span>
      </label>
      <input type="file" ref="eventImage" accept="image/*" class="file-input file-input-bordered w-full max-w-xs" required/>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary mt-6">Create Event</button>
    </form>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const event = ref({
  name: '',
  description: '',
  date: '',
  location: '',
})
const eventImage = ref(null)

async function submitEvent() {
  // Implement your form submission logic here
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
