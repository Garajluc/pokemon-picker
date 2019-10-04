function fetchPokemon(id) {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(pokemonList => {
            const pokemonUrl = pokemonList.results[id].url;
            const pokemonPromises =
                fetch(pokemonUrl)
                    .then(response => response.json());

            return pokemonPromises;
        });
}

export default fetchPokemon;