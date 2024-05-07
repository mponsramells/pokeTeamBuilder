<template>
  <div v-for="pokemon in team" :key="pokemon.id" class="grid grid-cols-1 w-full gap-4">
    <PokemonCard :pokemon="pokemon" @open-pokemon="openPokemon" />
  </div>
  <div v-if="displayInfo" class="w-full" >
    <PokemonInfoCard  :pokemon="pokemonInfo" @close-pokemon="closePokemon" />
  </div>
</template>

<script setup>
const team = useState('team');
const pokemonInfo = ref({});
const displayInfo = ref(false);
const {getPokemonById} = useApi();
async function openPokemon(pokemon) {
  pokemonInfo.value = await getPokemonById(pokemon.id);
  displayInfo.value = true;
}
</script>

<style scoped>

</style>