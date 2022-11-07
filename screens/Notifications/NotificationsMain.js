import React, { useState } from 'react';
import { Divider, View, VStack } from 'native-base';
import NotificationCard from '../Cards/Notifications/NotificationCard';
import { NotificationData } from '../../constants/NotificationData';

const NotificationsMain = ({ navigation }) => {
  const [notifications, setNotifications] = useState(NotificationData);

  return (
    <VStack>
      {notifications?.map((data, id) => {
        return (
          <View key={id}>
            <NotificationCard data={data} navigation={navigation} />
            <Divider />
          </View>
        );
      })}
    </VStack>
  );
};

export default NotificationsMain;
