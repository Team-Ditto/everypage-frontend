import { useContext } from 'react';
import { Divider, ScrollView, View } from 'native-base';

import NotificationCard from '../Cards/Notifications/NotificationCard';
import { NotificationContext } from '../../contexts/NotificationContext';

const NotificationsMain = ({ navigation }) => {
  const { notifications } = useContext(NotificationContext);

  return (
    <ScrollView>
      {notifications?.map(notification => {
        return (
          <View key={notification._id}>
            <NotificationCard notification={notification} navigation={navigation} />
            <Divider />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default NotificationsMain;
