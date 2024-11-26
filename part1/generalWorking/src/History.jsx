import React from 'react';

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>The App is Used By Pressing the Button</div>;
  }

  return <div>Button Press History: {allClicks.join(' ')}</div>;
};

export default History;
