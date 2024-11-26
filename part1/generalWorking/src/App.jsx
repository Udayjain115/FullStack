import { useState } from 'react';
import History from './History';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  // const [left, setLeft] = useState(0);
  // const [right, SetRight] = useState(0);
  const [clicks, setClicks] = useState({
    right: 0,
    left: 0,
  });

  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1;
    setAll(allClicks.concat('L'));
    const newClicks = {
      ...clicks,
      left: updatedLeft,
    };
    setTotal(updatedLeft + clicks.right);
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const updatedRight = clicks.right + 1;
    setAll(allClicks.concat('R'));

    const newClicks = {
      ...clicks,
      right: updatedRight,
    };
    setTotal(clicks.left + updatedRight);
    setClicks(newClicks);
  };

  return (
    <div>
      {clicks.left}
      {/* <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button> */}
      <Button
        handleClick={handleLeftClick}
        text="Left"
      />
      <Button
        handleClick={handleRightClick}
        text="Right"
      />
      {clicks.right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  );
};

export default App;
