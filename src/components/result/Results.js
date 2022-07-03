import React from 'react';
import Asteroid from '../asteroid/Asteroid';

export default function Results({ asteroids }) {

    const asteroidList = asteroids.map(asteroid => (
        <Asteroid
            id={asteroid.id}
            name={asteroid.name}
            date={asteroid.date}
            distance={asteroid.miss_distance_in_kilometers} />
    ));

    return (
        <div>
            <h2>Results</h2>
            {asteroidList}
        </div>
    )
}