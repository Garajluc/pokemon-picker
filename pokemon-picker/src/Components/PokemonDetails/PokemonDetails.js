import React, { Component } from 'react';

class PokemonDetails extends Component {
    render() {
        const state = this.props.location.state;
        return(
            <div>
                <div>{state.name}</div>
                <img src={state.imgUrl} alt={state.name}/>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        );
    }
}

export default PokemonDetails;
