import { Button, Image, View } from 'native-base';

export const GetNotificationHeader = navigation => {
  navigation.setOptions({
    headerRight: () => {
      return (
        <View style={{ marginRight: 10 }}>
          <Button
            variant='unstyled'
            onPress={() => {
              navigation.navigate('Notifications');
            }}
          >
            <Image source={require('../assets/notification.png')} alt='notication icon' />
          </Button>
        </View>
      );
    },
  });
};
