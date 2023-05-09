import css from './Feedback.module.css';
import clsx from 'clsx';

const FeedbackOptions = props => {
  const { onLeaveFeedback, options } = props;
  const optionsArray = Object.keys(options);
  return (
    <div className={css.profile_box_btn}>
      {optionsArray.map(option => (
        <button
          key={option}
          className={clsx(css.profile_btn, css[option])}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
