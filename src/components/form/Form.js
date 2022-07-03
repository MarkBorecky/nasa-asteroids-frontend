import React, { useEffect, useState } from "react";
import './Form.css';

function Form(props) {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const defaultValue = getDefaultDate()

    function getDefaultDate() {
        const today = new Date();
        const date = today.setDate(today.getDate());
        return new Date(date).toISOString().split('T')[0]
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
            <h3 htmlFor="new-todo-input" className="">Asteroid Browser</h3>
            <label htmlFor="new-todo-input" >FROM</label>
            <input type="date" value={start} onChange={handleStartChange} />
            <label htmlFor="new-todo-input" >FROM</label>
            <input type="date" value={end} onChange={handleEndChange} />
            <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit}>Search</button>
        </form>
    )
}

export default Form;