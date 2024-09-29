import React from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="text-center py-4 bg-green-600 text-white mb-6 rounded-lg">
      {message}
    </div>
  );
};

export default Notification;
