import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import PokemonDetails from "./PokemonDetails/PokemonDetails";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/pokemon/:id" component={PokemonDetails}/>
        </Switch>
    </BrowserRouter>
);

export default Router;