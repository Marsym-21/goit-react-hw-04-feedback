import css from './Feedback.module.css';
import { useState, useRef } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let complite = useRef(false);

  const onLeaveFeedback = data => {
    complite.current = true;
    switch (data) {
      case 'good':
        setGood(s => s + 1);
        break;
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      case 'bad':
        setBad(s => s + 1);
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
