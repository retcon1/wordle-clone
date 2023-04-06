import { useState } from "react";
import Row from './Row'

const Input = () => {
  const word = ["v", "i", "d", "e", "o"];
  const [guess, setGuess] = useState("");

  const handleGuess = (event) => {
    event.preventDefault();
    const formattedGuess = guess.toLowerCase().split("");
    for (let i = 0; i < word.length; i++) {
      if (word[i] === formattedGuess[i]) {
        
      } else if (formattedGuess.includes(word[i])) {
      } else {
      }
    }
  };

  return (
    <form className="Input" onSubmit={handleGuess}>
      <input value={guess} onChange={(event) => setGuess(event.target.value)} />
      <button type="submit" disabled={guess.length !== 5}>
        Make Your Guess
      </button>
    </form>
  );
};
export default Input;
