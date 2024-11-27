import React from 'react';

const Total = ({ course }) => {
  const { parts } = course;

  const add = (total, part) => {
    return total + part.exercises;
  };

  const summ = parts.reduce(add, 0);

  return (
    <p>
      <strong>Number Of Exercises {summ}</strong>
    </p>
  );
};

export default Total;
