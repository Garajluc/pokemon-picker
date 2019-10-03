import React, { Component } from 'react';

class LoadScreen extends Component {
    render() {
        return(
            <div>
                <figure className="photo">
                    <img className="photo__img photo__img-rotate" src={require('../../img/pokeball_PNG8.png')} alt="" width="100" />
                </figure>
            </div>
        );
    }
}

export default LoadScreen;
