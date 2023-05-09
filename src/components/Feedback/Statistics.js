import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage, complite } = props;
  return (
    <div className={css.statistics}>
      <h1 className={css.profile_title}>Statistics</h1>
      {complite ? (
        <ul className={css.statistics_list}>
          <li className={css.statistics_item}>Good: {good}</li>
          <li className={css.statistics_item}>Neutral: {neutral}</li>
          <li className={css.statistics_item}>Bad: {bad}</li>
          <li className={css.statistics_item}>Total: {total}</li>
          <li className={css.statistics_item}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  complite: PropTypes.bool.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
