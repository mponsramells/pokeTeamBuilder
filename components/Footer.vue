<script setup>
const menu = ref([
  { name: 'Catalogue', url: '/' },
  { name: 'Team', url: '/team'},
])
const team = useState('team');
</script>
<template>
  <footer class="bg-white w-full fixed bottom-0 z-50 p-4 shadow-md">
    <ul class="flex justify-around">
      <li v-for="{ name, url } in menu" :key="name" class="text-center">
        <NuxtLink :to="url" class="flex flex-col items-center text-gray-600 hover:text-tertiary relative">
          <p>{{ name }}</p>
          <span v-if="name === 'Team'" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {{ team.length }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
</style>