import css from './Options.module.css';

export default function Options ({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={css.wrapper}>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} type="button" onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};