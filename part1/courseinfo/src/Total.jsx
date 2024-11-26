import React from 'react';

const Total = (props) => {
  const { parts } = props;
  let sum = 0;

  parts.map((part) => {
    sum += part.exercises;
  });

  return <p>Number Of Exercises {sum}</p>;
};

export default Total;
