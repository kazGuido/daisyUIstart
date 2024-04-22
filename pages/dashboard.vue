<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="bg-white w-64 p-6 hidden sm:block">
      <a href="#" class="text-blue-500 text-lg font-semibold">Organizer account name </a>
      <div class="mt-8">
        <div class="flex items-center">
          <img class="h-10 w-10 rounded-full" src="https://picsum.photos/200" alt="Karim Nour avatar">
          <div class="ml-4">
            <p class="text-sm font-semibold text-gray-700">Karim Nour</p>
            <p class="text-xs text-gray-600">karim.nour@example.com</p>
          </div>
        </div>
        <div class="mt-10">
          <ul class="space-y-2">
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white">
                <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white">
                <span class="flex-1 ml-3 whitespace-nowrap">Tasks</span>
              </a>
            </li>
            <!-- Add additional menu items here -->
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Main Content Header -->
      <header class="flex justify-between items-center p-6 bg-white border-b border-gray-200">
        <!-- Search bar and other actions -->
        <div class="flex space-x-4">
          <!-- Filter tabs -->
          <!-- ... -->
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New Event</button>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Project Card -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-semibold truncate">Rebuilding Simon's web app</h5>
                <div>
                  <!-- Card action icons -->
                  <!-- ... -->
                </div>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">Status:</span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold">Started:</span>
                <span class="text-sm">4 Oct 2023</span>
              </div>
              <div class="flex items-center mb-4">
                <!-- Member Avatars -->
                <div class="flex -space-x-1 overflow-hidden">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <!-- Add more avatars here -->
                  <span class="flex justify-center items-center h-6 w-6 rounded-full bg-gray-300 text-xs text-gray-600">+</span>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <!-- Repeat for other project cards -->
            <div class="bg-white p-4 rounded-lg shadow-md">
              <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-semibold truncate">Rebuilding Simon's web app</h5>
                <div>
                  <!-- Card action icons -->
                  <!-- ... -->
                </div>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">Status:</span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold">Started:</span>
                <span class="text-sm">4 Oct 2023</span>
              </div>
              <div class="flex items-center mb-4">
                <!-- Member Avatars -->
                <div class="flex -space-x-1 overflow-hidden">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <!-- Add more avatars here -->
                  <span class="flex justify-center items-center h-6 w-6 rounded-full bg-gray-300 text-xs text-gray-600">+</span>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-semibold truncate">Rebuilding Simon's web app</h5>
                <div>
                  <!-- Card action icons -->
                  <!-- ... -->
                </div>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">Status:</span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold">Started:</span>
                <span class="text-sm">4 Oct 2023</span>
              </div>
              <div class="flex items-center mb-4">
                <!-- Member Avatars -->
                <div class="flex -space-x-1 overflow-hidden">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <!-- Add more avatars here -->
                  <span class="flex justify-center items-center h-6 w-6 rounded-full bg-gray-300 text-xs text-gray-600">+</span>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <div class="flex justify-between items-center mb-4">
                <h5 class="text-xl font-semibold truncate">Rebuilding Simon's web app</h5>
                <div>
                  <!-- Card action icons -->
                  <!-- ... -->
                </div>
              </div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">Status:</span>
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </div>
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-semibold">Started:</span>
                <span class="text-sm">4 Oct 2023</span>
              </div>
              <div class="flex items-center mb-4">
                <!-- Member Avatars -->
                <div class="flex -space-x-1 overflow-hidden">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://picsum.photos/80" alt="">
                  <!-- Add more avatars here -->
                  <span class="flex justify-center items-center h-6 w-6 rounded-full bg-gray-300 text-xs text-gray-600">+</span>
                </div>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// Your script here
</script>

<style scoped>
/* Your styles here */
</style>
