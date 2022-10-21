import { View, Text, Button } from 'native-base';
import React from 'react';
import { logout } from '../../firebase/firebase-service';

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
