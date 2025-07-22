import styles from './Notifications.module.css';

const Notification = ({ message }) => (
  <p className={styles.message}>{message}</p>
);

export default Notification;
