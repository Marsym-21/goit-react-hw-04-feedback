import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FeedbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  return (
    <div className={css.profile_box_btn}>
      {options.map(option => (
        <button
          key={option}
          className={clsx(css.profile_btn, css[option])}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
