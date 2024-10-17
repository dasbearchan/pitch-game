import React, { useState } from 'react';
import './App.css';

const notes = [
    'a',
    'a-sharp',
    'b',
    'c',
    'c-sharp',
    'd',
    'd-sharp',
    'e',
    'f',
    'f-sharp',
    'g',
    'g-sharp'
];

const notesSharp = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#'
]

const notesFlat = [
    'A',
    'Bb',
    'B',
    'C',
    'Db',
    'D',
    'Eb',
    'E',
    'F',
    'Gb',
    'G',
    'Ab'
]

function App() {
    let initNote = notes[Math.floor(Math.random() * notes.length)];
    const [currentNote, setCurrentNote] = useState(initNote);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [guessDisabled, setGuessDisabled] = useState(false);
    

    const playSound = () => {
        const audio = new Audio("audio/" + currentNote + ".wav");
        audio.play();
    };

    const getRandomNote = () => {
        const note = notes[Math.floor(Math.random() * notes.length)];
        setCurrentNote(note);
    };

    const makeGuess = (note) => {
        setGuess(note);
    };

    const submitGuess = () => {
        if (guess === currentNote) {
            // alert("Correct")
            setScore(score + 1)
        } else {
            // alert("Wrong")
        }
        setGuessDisabled(true)
    }

    return (
        <main className="App">
            <h1>Note Player</h1>
            <h3>Debug: {currentNote}</h3>
            <h3>Guess: {guess}</h3>
            <h3>Score: {score}</h3>
            <div>
                <button onClick={getRandomNote}>Next</button>
                <button onClick={playSound} id="play-sound">Play Sound</button>
            </div>
            <div>
                {[...Array(10)].map((_, index) => (
                    <button key={index} disabled={guessDisabled} onClick={() => makeGuess(`${notes[index]}`)}>
                        {`${notesFlat[index]} ${guessDisabled ? 'Enabled' : 'Disabled'}`}
                    </button>
                ))}
            </div>
            <button onClick={() => submitGuess()}>Submit</button>
        </main>
    );
}

export default App;
