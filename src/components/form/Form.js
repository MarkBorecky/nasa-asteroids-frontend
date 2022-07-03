import React, { useEffect, useState } from "react";
import './Form.css';

function Form(props) {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const defaultValue = getDefaultDate()

    function getDefaultDate() {
        return new Date().toISOString().split('T')[0]
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.fetchAsteroids(start, end);
    }

    function handleStartChange(e) {
        setStart(e.target.value);
    }

    function handleEndChange(e) {
        setEnd(e.target.value);
    }

    useEffect(() => {
        if (start === '') {
            setStart(defaultValue)
        }
        if (end === '') {
            setEnd(defaultValue)
        }
    })

    return (
        <form className="asteroidForm">
            <h3 className="">Asteroid Browser</h3>
            <label htmlFor="start-date-input">FROM</label>
            <input id="start" type="date" value={start} onChange={handleStartChange} />
            <label htmlFor="end-date-input" >FROM</label>
            <input id="end" type="date" value={end} onChange={handleEndChange} />
            <button type="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default Form;