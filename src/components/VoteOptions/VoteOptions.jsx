import styles from './Options.module.css';

const Options = ({ onLeaveFeedback, onReset, hasFeedback }) => (
  <div className={styles.wrapper}>
    <button onClick={() => onLeaveFeedback('good')}>Good</button>
    <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
    <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    {hasFeedback && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;
