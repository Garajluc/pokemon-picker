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

    async componentDidMount() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            isLoading: false,
            items: [...data.results]
        });
    }

    render() {
        return(
            <div>
                {this.state.isLoading ?
                    <LoadScreen /> :
                    <PokemonBox />
                }
            </div>
        );
    }
}

export default App;
