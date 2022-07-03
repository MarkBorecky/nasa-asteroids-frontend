import React from 'react';
import './Asteroid.css';

function Asteroid(props) {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="asteroid">
                <p>name: {props.name}</p>
                <p>id: {props.id}</p>
                <p>date: {props.date}</p>
                <p>distance: {props.distance} km</p>
            </div>
        </div>
    )
}

export default Asteroid