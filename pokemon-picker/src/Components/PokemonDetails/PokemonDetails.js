import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
    render() {
        const state = this.props.location.state;
        return(
            <div>
                <div>{state.name}</div>
                <img src={state.imgUrl} alt={state.name}/>
                <button>
                    <Link to={{ pathname: '/'}}>Back</Link>
                </button>
            </div>
        );
    }
}

export default PokemonDetails;
