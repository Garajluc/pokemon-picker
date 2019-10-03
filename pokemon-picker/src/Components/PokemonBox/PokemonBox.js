import React from 'react';
import { Link } from 'react-router-dom';

function PokemonBox({pokemons}) {

    return pokemons.map((pokemon, index) => (
        <div className="section-list__item" key={index}>
            <figure className="photo">
                <Link className="section--list__link" to={{
                    pathname: `/pokemon/${index+1}`,
                    state: {
                        'name': pokemon.name,
                        'imgUrl': pokemon.imgUrl
                    }
                }}
                >
                    <img className="photo__img photo__img-shadow photo__img-medium photo__img--scaled" src={pokemon.imgUrl} alt={pokemon.name}/>
                </Link>
            </figure>
        </div>
    ))
}

export default PokemonBox;
