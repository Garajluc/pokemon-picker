import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { fetchPokemon } from './PokemonDetailService';

class PokemonDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pokemon: []
        }
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const pokemon = await fetchPokemon(parseInt(id)+1);

        this.setState({
            pokemon: {
                name: pokemon.species.name,
                sprite: pokemon.sprites.front_default,
            }
        });
    }


    render() {
        return(
            <div className="section">
                <div className="section-detail">
                    <nav className="nav">
                        <button className="btn btn--back" onClick={() => this.props.history.goBack()}>
                            <FontAwesomeIcon className="btn__icon" icon={faChevronLeft}/>Back
                        </button>
                    </nav>
                    <div className="header">
                        <h1>{this.state.pokemon.name}</h1>
                    </div>
                    <figure className="photo">
                        <img className="photo__img photo__img-big" src={this.state.pokemon.sprite} alt={this.state.pokemon.name}/>
                    </figure>
                </div>
            </div>
        );
    }
}

export default PokemonDetails;
