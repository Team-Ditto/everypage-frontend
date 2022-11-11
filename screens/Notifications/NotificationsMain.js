import { useContext } from 'react';
import { Divider, View, VStack } from 'native-base';

import NotificationCard from '../Cards/Notifications/NotificationCard';
import { NotificationContext } from '../../contexts/NotificationContext';

const NotificationsMain = ({ navigation }) => {
  const { notifications } = useContext(NotificationContext);

  return (
    <VStack>
      {notifications?.map(notification => {
        return (
          <View key={notification._id}>
            <NotificationCard notification={notification} navigation={navigation} />
            <Divider />
          </View>
        );
      })}
    </VStack>
  );
};

export default NotificationsMain;
