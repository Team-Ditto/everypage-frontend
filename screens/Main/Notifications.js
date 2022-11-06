import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Center, Box, HStack, Button } from 'native-base';

import Search from '../Assets/Search';
import NotificationsMain from '../Notifications/NotificationsMain';
import Messages from '../Notifications/Messages';

const Notifications = ({ navigation }) => {
  //const [wishlistData, setWishlistData] = useState(WishlistData);
  const [isForLater, setIsForLater] = useState(true);
  const [status, setStatus] = useState('For Later');

  function handleInput(value) {
    setIsForLater(value);
  }

  return (
    <VStack>
      <Search navigation={navigation} />
      <Box
        backgroundColor='#FDF5EA'
        mx='4%'
        mt='18px'
        borderRadius='10px'
        borderColor='#DC924D'
        borderStyle='solid'
        borderWidth='1px'
      >
        {isForLater ? (
          <HStack display='flex' flexDirection='row'>
            <Button backgroundColor='#DC924D' flexGrow={true} borderRadius='10px' onPress={() => handleInput(true)}>
              Notifications
            </Button>
            <Button
              backgroundColor='#FDF5EA'
              _text={{ color: '#DC924D' }}
              flexGrow={true}
              borderRadius='10px'
              onPress={() => handleInput(false)}
            >
              Messages
            </Button>
          </HStack>
        ) : (
          <HStack display='flex' flexDirection='row'>
            <Button
              backgroundColor='#FDF5EA'
              _text={{ color: '#DC924D' }}
              flexGrow={true}
              borderRadius='10px'
              onPress={() => handleInput(true)}
            >
              For Later
            </Button>
            <Button backgroundColor='#DC924D' flexGrow={true} borderRadius='10px' onPress={() => handleInput(false)}>
              Requested
            </Button>
          </HStack>
        )}
      </Box>
      <VStack>
        <Box>{isForLater ? <NotificationsMain navigation={navigation} /> : <Messages navigation={navigation} />}</Box>
      </VStack>
    </VStack>
  );
};

const Styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
  buttonInactive: {
    backgroundColor: '#FDF5EA',
    color: '#DC924D',
    flexGrow: true,
    borderRadius: '10px',
  },
});

export default Notifications;
