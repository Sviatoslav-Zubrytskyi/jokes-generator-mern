import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
    const [joke, setJoke] = useState('');
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        async function getJokes() {
            const response = await fetch(`http://localhost:5000/record/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const jokes = await response.json();
            setJokes(jokes);
        }

        getJokes();

        return;
    }, []);
    const getRandomJoke = () => {
        if (jokes.length === 0) setJoke("No jokes left. Come tomorrow")
        else setJoke(jokes.splice(Math.floor(Math.random() * jokes.length), 1))
    }

    return (
        <div className={"body"}>
            <button className="joke-button" id={"jokeButton"} onClick={getRandomJoke}>Generate random joke</button>
            <h1 className="joke">{joke}</h1>
        </div>
    );
}

export default App;
