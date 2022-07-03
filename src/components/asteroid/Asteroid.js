import React from 'react';
import './Asteroid.css';

function Asteroid(props) {
    return(
        <div className="asteroid">            
            <p>name: {props.name}</p>            
            <p>id: {props.id}</p>            
            <p>date: {props.date}</p>            
            <p>distance: {props.distance} km</p>
        </div>
    )
}

export default Asteroid