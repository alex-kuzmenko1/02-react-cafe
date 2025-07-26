import { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import styles from './App.module.css';


type FeedbackState = {
  good: number;
  neutral: number;
  bad: number;
};

const App = () => {
  const [feedback, setFeedback] = useState<FeedbackState>(() => {
    const saved = localStorage.getItem('feedback');
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

 
  const updateFeedback = (type: keyof FeedbackState) => {
    setFeedback(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <div className={styles.buttons}>
        <button onClick={() => updateFeedback('good')} className={styles.button}>Good</button>
        <button onClick={() => updateFeedback('neutral')} className={styles.button}>Neutral</button>
        <button onClick={() => updateFeedback('bad')} className={styles.button}>Bad</button>
        {total > 0 && (
          <button onClick={resetFeedback} className={styles.resetButton}>Reset</button>
        )}
      </div>

      {total > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;