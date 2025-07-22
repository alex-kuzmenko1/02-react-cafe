import { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notifications/Notifications';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem('feedback');
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = type => {
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
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>

      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        hasFeedback={total > 0}
      />

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
