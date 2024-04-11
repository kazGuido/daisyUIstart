<template>
  <div class="p-4 flex gap-4">
    <button class="btn">Hello daisyUI</button>
    <select class="select w-full max-w-xs" v-model="colorMode.preference">
      <option disabled selected>Theme</option>
      <option v-for="theme of themes" :key="theme">{{ theme }}</option>
    </select>
  </div>
  <div class="hero bg-base-200 py-10">


    <NuxtPage /> <!-- The placeholder for page content -->

  
  </div>
  
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
  'system',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
</script>
