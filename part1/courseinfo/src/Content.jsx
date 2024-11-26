import React from 'react';
import Part from './Part';

const Content = (props) => {
  const parts = props.parts;

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
