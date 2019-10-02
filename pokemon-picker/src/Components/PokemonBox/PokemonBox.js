import React from 'react';

function PokemonBox({pokemons}) {
    return pokemons.map((pokemon, index) => (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.imgUrl}</p>
        </div>
    ))
}

export default PokemonBox;
