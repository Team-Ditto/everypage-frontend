import { useState, createContext, useEffect } from 'react';

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [totalUnreadNotifications, setTotalUnreadNotifications] = useState(0);

  return (
    <NotificationContext.Provider
      value={{ notifications, totalUnreadNotifications, setNotifications, setTotalUnreadNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
