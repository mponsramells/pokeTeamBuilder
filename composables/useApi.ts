export const useApi = () => {
    const baseUrl = 'https://pokebuildapi.fr/api/v1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    };
    const getPokemon = async () => {
        const url = `${baseUrl}/pokemon/`;
        const response = await $fetch(url, options);
        return response;
    };
    const getPokemonById = async (id: string) => {
        const url = `${baseUrl}/pokemon/${id}`;
        const response = await $fetch(url, options);
        return response;
    };
    const getTypeList = async () => {
        const url = `${baseUrl}/types`;
        const response = await $fetch(url, options);
        return response;
    };
    return { getPokemon, getPokemonById, getTypeList };

}