<template>
  <Navbar />
  <slot />
  <Footer />
</template>

<script setup>
const team = useState('team', () => []);
</script>