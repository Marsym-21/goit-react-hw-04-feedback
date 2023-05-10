import css from './Feedback.module.css';
import { useState, useRef, useReducer } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

function countReducer(prevState, nextState) {
  return prevState + nextState;
}

const Feedback = () => {
  const [good, setGood] = useReducer(countReducer, 0);
  const [neutral, setNeutral] = useReducer(countReducer, 0);
  const [bad, setBad] = useReducer(countReducer, 0);

  let complite = useRef(false);

  const onLeaveFeedback = data => {
    complite.current = true;
    switch (data) {
      case 'good':
        setGood(1);
        break;
      case 'neutral':
        setNeutral(1);
        break;
      case 'bad':
        setBad(1);
        break;

      default:
        break;
    }
  };
  const total = good + neutral + bad;
  const positivePercentage = ((good / total) * 100).toFixed([0]);

  return (
    <div className={css.profile}>
      <h1 className={css.profile_title}>Please leave feedback</h1>
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={['good', 'neutral', 'bad']}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
        complite={complite.current}
      />
    </div>
  );
};

export default Feedback;
