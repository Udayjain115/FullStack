import { useState } from 'react';
import Statistics from './Statistics';
import Button from './Button';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        handleClick={handleGoodClick}
        text="Good"
      />
      <Button
        handleClick={handleNeutralClick}
        text="Neutral"
      />
      <Button
        handleClick={handleBadClick}
        text="Bad"
      />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  );
}

export default App;
