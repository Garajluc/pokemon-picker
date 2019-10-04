import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadScreen from "../LoadScreen";
import { fetchPokemons } from './PokemonListService'

class PokemonList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            pokemons: []
        }
    }

    async componentDidMount() {
        const pokemons = await fetchPokemons();

        this.setState({
            isLoading: false,
            pokemons: pokemons.map(pokemon => ({
                name: pokemon.species.name,
                sprite: pokemon.sprites.front_default,
            }))
        });
    }

    // renderLoadingScreen() {
    //     const { isLoading } = this.state;
    //
    //     if(!isLoading) {
    //         return null;
    //     }
    //
    //     return <LoadScreen />;
    // }
    //
    // renderList() {
    //     const { isLoading } = this.state;
    //
    //     if(isLoading) {
    //         return null;
    //     }
    //
    //     return (
    //         <div className="section">
    //             ...
    //             ...
    //         </div>
    //     );
    // }

    render() {
        const { pokemons } = this.state;

        // {this.renderLoadingScreen()}
        // {this.renderList()}
        return (
            this.state.isLoading ? (
                <LoadScreen />
            ) : (
                <div className="section">
                    <div className="section-list flex">
                        {pokemons.map((pokemon, index) => (
                            <div className="section-list__item" key={pokemon.name}>
                                <Link className="section-list__link" to={{pathname: `/pokemon/${index}`}}>
                                    <figure className="photo">
                                        <img
                                            className="photo__img photo__img-shadow photo__img-medium photo__img--scaled"
                                            src={pokemon.sprite}
                                            alt={pokemon.name}
                                        />
                                    </figure>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )
        )
    }
}

export default PokemonList;
