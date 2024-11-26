import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  <h1>Statictics</h1>;

  if (good + neutral + bad == 0) {
    return (
      <>
        <h1>Statictics</h1>

        <div>No FeedBack Given</div>
      </>
    );
  }
  return (
    <>
      <h1>Statictics</h1>
      <table>
        <tbody>
          <StatisticLine
            text="Good"
            value={good}
          />
          <StatisticLine
            text="Neutral"
            value={neutral}
          />
          <StatisticLine
            text="Bad"
            value={bad}
          />
          <StatisticLine
            text="All"
            value={good + neutral + bad}
          />
          <StatisticLine
            text="Average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticLine
            text="Positive"
            value={`${(good / (good + neutral + bad)) * 100}%`}
          />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
