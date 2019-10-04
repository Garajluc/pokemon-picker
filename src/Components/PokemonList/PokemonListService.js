export function fetchPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(pokemonList => {
            const pokemonUrls = pokemonList.results.map(pokemon => pokemon.url);
            const pokemonPromises = [...pokemonUrls].map(pokemonUrl => (
                fetch(pokemonUrl)
                    .then(response => response.json())
            ));

            return Promise.all(pokemonPromises);
        });
}