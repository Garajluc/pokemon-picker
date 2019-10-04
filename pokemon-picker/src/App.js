import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails";
import PokemonList from "./Components/PokemonList/PokemonList";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={PokemonList} exact/>
                    <Route path="/pokemon/:id" component={PokemonDetails}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
