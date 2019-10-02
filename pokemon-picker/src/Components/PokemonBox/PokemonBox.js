import React from 'react';

function PokemonBox({pokemons}) {

    return pokemons.map((pokemon, index) => (
        <div key={index}>
            <img src={pokemon.imgUrl} alt={pokemon.name} width='200'/>
        </div>
    ))
}

export default PokemonBox;
