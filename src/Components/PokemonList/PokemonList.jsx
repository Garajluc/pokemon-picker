import React from 'react';
import { Link } from 'react-router-dom';
import LoadScreen from "../LoadScreen";

class PokemonList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
            .then(res => res.json())
            .then((result) => {
                const url =result.results.map(res => {
                    return res.url
                });

                Promise.all([...url].map((url) =>
                    fetch(url)
                        .then(res => res.json())
                ))
                    .then(res => {
                        this.setState({
                            isLoading: false,
                            items: [...res].map(res => {
                                return { 'name': res.species.name, 'imgUrl': res.sprites.front_default}
                            })
                        });
                    })
            })
    }

    render() {
        const pokemons = this.state.items;

        return (
            this.state.isLoading ?
                <LoadScreen /> :
                <div className="section">
                    <div className="section-list flex">
                        {pokemons.map((pokemon, index) => (
                            <div className="section-list__item" key={index}>
                                <Link className="section-list__link" to={{
                                    pathname: `/pokemon/${index + 1}`,
                                    state: {
                                        'name': pokemon.name,
                                        'imgUrl': pokemon.imgUrl
                                    }
                                }}>
                                    <figure className="photo">
                                        <img className="photo__img photo__img-shadow photo__img-medium photo__img--scaled"
                                             src={pokemon.imgUrl} alt={pokemon.name}/>
                                    </figure>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default PokemonList;
