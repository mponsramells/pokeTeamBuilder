<template>
  <div class="container w-full mx-auto px-4 px-8 py-8 mb-40">
    <h1 class="text-4xl font-bold mb-4">Pokemons</h1>
    <div class="relative text-gray-600">
      <input type="search" name="search" v-model="search" placeholder="Search by name" class="bg-white h-10 px-5 pr-10 rounded-full">
    </div>
    <h2 class="text-2xl font-semibold mb-2">Types</h2>
    <div class="grid grid-cols-5 gap-4 mb-8">
      <div v-for="type in types" :key="type.id" class="flex items-center space-x-2">
        <button class="flex p-2" :class="type.name === selectedType ? 'text-white bg-primary' : 'text-gray-500'" @click="filterByType(type.name)">
          {{ type.name }} <img class="h-6 w-6 mx-5" :src="type.image" alt="">
        </button>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="pokemon in filteredPokemons" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" @open-pokemon="openPokemon" @add-to-team="addToTeam" />
      </div>
    </div>
    <div v-if="!loading && (filteredPokemons.length >= displayCount)" class="flex justify-center mt-4">
      <button class="bg-primary self-align-center text-white rounded-full w-1/5 p-2 px-4" @click="loadMore">See more</button>
    </div>
    <div v-if="loading" class="flex justify-center">
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </div>
    <div v-if="displayInfo" class="w-full" >
      <PokemonInfoCard  :pokemon="pokemonInfo" @close-pokemon="closePokemon" />
    </div>
  </div>
</template>

<script setup>

const pokemons = ref([]);
const loading = ref(true);
const pokemonInfo = ref({});
const displayInfo = ref(false);
const team = useState('team');
const types = ref([]);
const {getPokemon, getPokemonById, getTypeList} = useApi();
const selectedType = ref(null);
const search = ref('');
const displayCount = ref(12);
function filterByType(type) {
  if (selectedType.value === type) {
    selectedType.value = null;
  } else {
    selectedType.value = type;
  }
}
function loadMore() {
  displayCount.value += 12;
}

async function fetchPokemons() {
  pokemons.value = await getPokemon();
  loading.value = false;
}
const filteredPokemons = computed(() => {
  let filteredValue = pokemons.value;
  if (selectedType.value) {
    filteredValue = filteredValue.filter(pokemon => pokemon.apiTypes.some(type => type.name === selectedType.value));
  }
  if (search.value) {
    filteredValue = filteredValue.filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase()));
  }
  if(displayCount.value) {
    filteredValue = filteredValue.slice(0, displayCount.value);
  }
  return filteredValue;
});
async function fetchTypes() {
  types.value = await getTypeList();
}
async function openPokemon(pokemon) {
  pokemonInfo.value = await getPokemonById(pokemon.id);
  displayInfo.value = true;
}
function closePokemon() {
  displayInfo.value = false;
}
function addToTeam(pokemon) {
  if (team.value.length >= 6) {
    alert('You can only have 6 pokemons in your team');
    return;
  }
  team.value.push(pokemon);
}
onMounted(() => {
  fetchPokemons();
  fetchTypes();
});
</script>

<style scoped>

</style>