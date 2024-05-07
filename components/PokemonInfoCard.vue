<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white rounded-xl shadow-lg overflow-y-auto w-2/4 p-6 flex flex-col">
      <div class="flex justify-end mb-4">
        <button class="font-bold p-2" @click="$emit('close-pokemon')">X</button>
      </div>
      <div class="flex-shrink-0">
        <img class="h-64 w-full object-contain" :src="pokemon.image" :alt="pokemon.name"/>
      </div>
      <div class="flex flex-col gap-3 w-full">
        <h2 class="text-xl font-semibold">{{ pokemon.name }}</h2>
        <p class="">Pokedex ID: #{{ pokemon.pokedexId }}</p>
        <div class="flex gap-2 flex-wrap">
          <span v-for="type in pokemon.apiTypes" :key="type.name" class="bg-gray-200 rounded-full px-3 py-1 text-sm flex items-center gap-1">
            <img class="h-6 w-6" :src="type.image" alt=""/>
            {{ type.name }}
          </span>
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col">
            <p>HP: {{ pokemon.stats.HP }}</p>
            <p>Attack: {{ pokemon.stats.attack }}</p>
            <p>Defense: {{ pokemon.stats.defense }}</p>
            <p>Special Attack: {{ pokemon.stats.special_attack }}</p>
            <p>Special Defense: {{ pokemon.stats.special_defense }}</p>
            <p>Speed: {{ pokemon.stats.speed }}</p>
          </div>
          <div class="grid grid-cols-5 gap-2">
            <span v-for="resistance in pokemon.apiResistances" :key="resistance.name">
              {{ resistance.name }}: {{ resistance.damage_multiplier }} ({{ resistance.damage_relation }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  pokemon: Object
})
</script>