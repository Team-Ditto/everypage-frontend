import React, { useState } from 'react';
import { Divider, Text, VStack } from 'native-base';
import NotificationCard from '../Cards/Notifications/NotificationCard';
import { NotificationData } from '../../constants/NotificationData';

const NotificationsMain = ({ navigation }) => {
  const [notifications, setNotifications] = useState(NotificationData);

  return (
    <VStack>
      {notifications?.map((data, id) => {
        return (
          <>
            <NotificationCard key={id} data={data} navigation={navigation} />
            <Divider />
          </>
        );
      })}
    </VStack>
  );
};

export default NotificationsMain;
