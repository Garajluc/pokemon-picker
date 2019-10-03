import React, { Component } from 'react';
import './App.css';
import PokemonBox from "./Components/PokemonBox/PokemonBox";
import LoadScreen from "./Components/LoadScreen/LoadScreen";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount() {
        // const range = [...Array(9).keys()];
        // const url = [];
        // range.map(number => url.push('https://pokeapi.co/api/v2/pokemon/'+ (number+1)));


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

        return(
            <div>
                {this.state.isLoading ?
                    <LoadScreen /> :
                    <PokemonBox pokemons={pokemons}/>
                }
            </div>
        );
    }
}

export default App;
