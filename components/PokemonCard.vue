<template>
  <div class="card max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg flex flex-col p-5 justify-center">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" :src="pokemon.image" :alt="pokemon.name" />
      </div>
      <div class="p-8">
        <p class="block mt-1 text-lg leading-tight font-medium text-black">{{ pokemon.name }}</p>
        <p class="mt-2 text-gray-500">#{{ pokemon.pokedexId }}</p>
        <div v-for="type in pokemon.apiTypes" class="mt-2 text-gray-500 flex">{{ type.name }} <img class="h-6 w-6 mx-2" :src="type.image" alt=""></div>
      </div>
    </div>
    <div class="flex justify-center">
      <button class="bg-primary w-1/2 rounded-full p-2 px-4" @click="$emit('open-pokemon', pokemon)">Voir plus</button>
      <button v-if="!team.some(p => p === pokemon)" class="bg-primary w-1/2 rounded-full p-2 px-4" @click="$emit('add-to-team', pokemon)">Add To Team</button>
      <button v-else class="bg-primary w-1/2 rounded-full p-2 px-4" @click="RemoveToTeam(pokemon)">Remove To Team</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemon: Object
})
const team = useState('team');
function RemoveToTeam(pokemon) {
  team.value = team.value.filter(p => p.id !== pokemon.id);
}
</script>