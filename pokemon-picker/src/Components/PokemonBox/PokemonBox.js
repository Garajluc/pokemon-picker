import React from 'react';
import { Link } from 'react-router-dom';

function PokemonBox({pokemons}) {

    return pokemons.map((pokemon, index) => (
        <div key={index}>
            <div>Henlo Testt</div>
            <img src={pokemon.imgUrl} alt={pokemon.name} width='200'/>
            <button>
                <Link to={{
                    pathname: `/pokemon/${index+1}`,
                    state: {
                        'name': pokemon.name,
                        'imgUrl': pokemon.imgUrl
                    }
                }}>Show Details</Link>
            </button>
        </div>
    ))
}

export default PokemonBox;
