import logo from './logo.png';
import './App.css';
import Form from './components/form/Form';
import Results from './components/result/Results';
import { useState } from 'react';
import React from 'react';

function App(props) {
  const [asteroids, setAsteroids] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const fetchAsteroids = async (start, end) => {

    const endpoint = `http://127.0.0.1:8000/api/v1/asteroids?start_date=${start}&end_date=${end}`;

    setIsLoading(true);

    try {
      clearErrors(setErr);
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setAsteroids(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form fetchAsteroids={fetchAsteroids} />
        {err && <h2>{err}</h2>}
        {isLoading && <h2>Loading...</h2>}
        <Results asteroids={asteroids} />
      </header>
    </div>
  );
}

export default App;
function clearErrors(setErr) {
  setErr('');
}

