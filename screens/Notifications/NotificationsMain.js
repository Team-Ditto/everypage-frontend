import { useContext } from 'react';
import { Divider, ScrollView, View, VStack } from 'native-base';

import NotificationCard from '../Cards/Notifications/NotificationCard';
import { NotificationContext } from '../../contexts/NotificationContext';

const NotificationsMain = ({ navigation, handleInput }) => {
  const { notifications } = useContext(NotificationContext);

  return (
    <VStack>
      <ScrollView
        style={{
          marginBottom: 200,
        }}
      >
        {notifications?.map(notification => {
          return (
            <View key={notification._id}>
              <NotificationCard notification={notification} navigation={navigation} handleInput={handleInput} />
              <Divider />
            </View>
          );
        })}
      </ScrollView>
    </VStack>
  );
};

export default NotificationsMain;
