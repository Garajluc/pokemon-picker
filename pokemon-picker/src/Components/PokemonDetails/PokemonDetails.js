import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class PokemonDetails extends Component {
    render() {
        const state = this.props.location.state;
        return(
            <div className="section section--detail">
                <nav className="nav">
                    <button className="btn btn--back" onClick={() => this.props.history.goBack()}>
                        <FontAwesomeIcon className="btn__icon" icon={faChevronLeft}/>Back
                    </button>
                </nav>
                <div className="section-header">
                    <h2>{state.name}</h2>
                </div>
                <figure className="photo">
                    <img className="photo__img photo__img-big" src={state.imgUrl} alt={state.name}/>
                </figure>
            </div>
        );
    }
}

export default PokemonDetails;
