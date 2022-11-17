import { Button, Image, Text, View } from 'native-base';
import { InUseColor, SuccessColor } from '../assets/style/color';
export const GetNotificationHeader = (navigation, totalUnreadNotifications = 0) => {
  console.log('totalUnreadNotifications', totalUnreadNotifications);
  navigation.setOptions({
    headerRight: () => {
      return (
        <View style={{ marginRight: 10, position: 'relative' }}>
          <Button
            variant='unstyled'
            onPress={() => {
              navigation.navigate('Notifications');
            }}
          >
            <Image source={require('../assets/notification.png')} alt='notification icon' />
          </Button>
          <Text
            bold
            style={{
              fontSize: 16,
              position: 'absolute',
              right: 8,
              color: totalUnreadNotifications == 0 ? SuccessColor.success : InUseColor.inUse,
            }}
            fontSize={24}
          >
            {totalUnreadNotifications}
          </Text>
        </View>
      );
    },
  });
};
