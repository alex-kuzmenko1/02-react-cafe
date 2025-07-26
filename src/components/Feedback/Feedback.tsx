import React from 'react';
import styles from './Feedback.module.css';


interface FeedbackProps {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}


const Feedback: React.FC<FeedbackProps> = ({ 
  good, 
  neutral, 
  bad, 
  total, 
  positivePercentage 
}) => {
  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;