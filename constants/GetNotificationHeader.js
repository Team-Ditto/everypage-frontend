import { useContext } from 'react';
import { Button, Image, Text, View, Pressable } from 'native-base';

import { BlueShades, OrangeShades } from '../assets/style/color';
import { NotificationContext } from '../contexts/NotificationContext';

export const GetNotificationHeader = navigation => {
  navigation.setOptions({
    headerRight: () => <NotificationBadge navigation={navigation} />,
  });
};

const NotificationBadge = ({ navigation }) => {
  const { totalUnreadNotifications } = useContext(NotificationContext);

  return (
    <View style={{ marginRight: 10, position: 'relative' }}>
      <Pressable
        style={{ marginRight: 10, position: 'relative' }}
        onPress={() => {
          navigation.navigate('Notifications');
        }}
      >
        <Button
          variant='unstyled'
          onPress={() => {
            navigation.navigate('Notifications');
          }}
        >
          <Image source={require('../assets/notification.png')} alt='notification icon' />
        </Button>
        {totalUnreadNotifications > 0 && (
          <Text
            bold
            style={{
              fontSize: 16,
              position: 'absolute',
              right: 7,
              color: OrangeShades.primaryOrange,
            }}
            fontSize={24}
          >
            {totalUnreadNotifications}
          </Text>
        )}
      </Pressable>
    </View>
  );
};
