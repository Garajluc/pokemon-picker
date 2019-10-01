import React, { Component } from 'react';
import './App.css';


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
        console.log(this.state.items[0]);
    }

    render() {
        return(
            <div>
                {this.state.isLoading ?
                    <div>loading</div> :
                    <div>{this.state.items[0].name}</div>}
            </div>
        );
    }
}

export default App;
