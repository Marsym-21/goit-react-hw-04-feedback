import PropTypes from 'prop-types';
import css from './Feedback.module.css';
import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  complite = false;

  onLeaveFeedback = e => {
    this.complite = true;
    this.onAddFeedback(e);
  };

  onAddFeedback = e => {
    const object = e.target.textContent.toLocaleLowerCase();
    switch (object) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 };
        });
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
        break;
    }
  };

  render() {
    const state = this.state;
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    const positivePercentage = ((good / total) * 100).toFixed([0]);
    return (
      <div className={css.profile}>
        <h1 className={css.profile_title}>Please leave feedback</h1>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={this.state}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          complite={this.complite}
        />
      </div>
    );
  }
  onPropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    complite: PropTypes.bool.isRequired,
    positivePercentage: PropTypes.number.isRequired,
    onLeaveFeedback: PropTypes.string.isRequired,
  };
}

export default Feedback;
