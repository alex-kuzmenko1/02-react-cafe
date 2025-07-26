interface NotificationsProps {
  message: string;
}

const Notifications = ({ message }: NotificationsProps) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Notifications;