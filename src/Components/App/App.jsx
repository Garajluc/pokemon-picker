import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonDetails from "../PokemonDetails";
import PokemonList from "../PokemonList";

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
