import { View, Text } from 'react-native';
import React from 'react';
import { logout } from '../../firebase/firebase-service';
import { Button } from 'native-base';

export default function Profile() {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button mt='2' colorScheme='gray' onPress={handleLogout}>
        Logout
      </Button>
    </View>
  );
}
