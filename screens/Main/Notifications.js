import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Center, Box, HStack, Button } from 'native-base';
import { OrangeShades, whiteShades } from '../../assets/style/color';

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
        backgroundColor={OrangeShades.quaternaryOrange}
        mx='4%'
        mt='18px'
        borderRadius='10px'
        borderColor={OrangeShades.primaryOrange}
        borderStyle='solid'
        borderWidth='1px'
      >
        <HStack display='flex' flexDirection='row'>
          <Button
            style={isForLater ? styles.activeTab : styles.inactiveTab}
            _text={isForLater ? styles.activeTab : styles.inactiveTab}
            flexGrow={true}
            borderRadius='10px'
            onPress={() => handleInput(true)}
          >
            Notifications
          </Button>
          <Button
            style={isForLater ? styles.inactiveTab : styles.activeTab}
            _text={isForLater ? styles.inactiveTab : styles.activeTab}
            flexGrow={true}
            borderRadius='10px'
            onPress={() => handleInput(false)}
          >
            Messages
          </Button>
        </HStack>
      </Box>
      <VStack>
        <Box>{isForLater ? <NotificationsMain navigation={navigation} /> : <Messages navigation={navigation} />}</Box>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    backgroundColor: OrangeShades.primaryOrange,
    color: OrangeShades.quaternaryOrange,
  },
  inactiveTab: {
    backgroundColor: OrangeShades.quaternaryOrange,
    color: OrangeShades.primaryOrange,
  },
  buttonActive: {
    backgroundColor: OrangeShades.primaryOrange,
    flexGrow: true,
    borderRadius: '10px',
  },
  buttonInactive: {
    backgroundColor: OrangeShades.quaternaryOrange,
    color: OrangeShades.primaryOrange,
    flexGrow: true,
    borderRadius: '10px',
  },
});

export default Notifications;
