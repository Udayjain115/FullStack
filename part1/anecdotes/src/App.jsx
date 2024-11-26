import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const [max, setMax] = useState(0);

  const handleClick = () => {
    let x = Math.floor(Math.random() * anecdotes.length);

    setSelected(x);
  };

  const handleVoteClick = (curr) => {
    const copy = { ...vote };
    copy[curr] = copy[curr] + 1;

    setVote(copy);
    console.log(Object.entries(copy)[curr][1], 'current');
    console.log(Object.entries(copy)[max][1], 'max');

    if (Object.entries(copy)[curr][1] > Object.entries(copy)[max][1]) {
      setMax(Object.entries(copy)[curr][0]);
    }
  };

  return (
    <>
      <div>
        <h1>Anecdote Of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {vote[selected]} votes</p>
      </div>
      <button
        onClick={() => {
          handleVoteClick(selected);
        }}>
        Vote
      </button>
      <button onClick={handleClick}>Next Anecdote</button>
      <p>{anecdotes[max]}</p>
      <p>has {vote[max]} votes</p>
    </>
  );
};

export default App;
