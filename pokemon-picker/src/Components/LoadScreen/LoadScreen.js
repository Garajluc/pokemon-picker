import React, { Component } from 'react';

class LoadScreen extends Component {
    render() {
        return(
            <div className="section flex">
                <div className="section-load">
                    <figure className="photo photo-delayVisibility">
                        <img className="photo__img photo__img-rotate" src={require('../../img/pokeball_PNG8.png')} alt="" width="100" />
                    </figure>
                </div>
            </div>
        );
    }
}

export default LoadScreen;
