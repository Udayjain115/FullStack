import React from 'react';
import Part from './Part';

const Content = ({ course }) => {
  const parts = course.parts;

  return parts.map((part) => {
    return (
      <div>
        <Part
          name={part.name}
          exercises={part.exercises}
        />
      </div>
    );
  });
};

export default Content;
