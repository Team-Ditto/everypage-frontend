import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Center, Box, HStack, Button } from 'native-base';
import { OrangeShades } from '../../assets/style/color';

import Search from '../Assets/Search';
import NotificationsMain from '../Notifications/NotificationsMain';
import Messages from '../Notifications/Messages';

const Notifications = ({ navigation }) => {
  //const [wishlistData, setWishlistData] = useState(WishlistData);
  const [isNotifications, setIsNotifications] = useState(true);

  function handleInput(value) {
    setIsNotifications(value);
  }

  return (
    <VStack>
      <Search navigation={navigation} />
      <Box style={styles.tabsBox}>
        <HStack display='flex' flexDirection='row'>
          <Button
            style={isNotifications ? styles.activeTab : styles.inactiveTab}
            _text={isNotifications ? styles.activeTab : styles.inactiveTab}
            onPress={() => handleInput(true)}
          >
            Notifications
          </Button>
          <Button
            style={isNotifications ? styles.inactiveTab : styles.activeTab}
            _text={isNotifications ? styles.inactiveTab : styles.activeTab}
            onPress={() => handleInput(false)}
          >
            Messages
          </Button>
        </HStack>
      </Box>
      <VStack>
        <Box>
          {isNotifications ? <NotificationsMain navigation={navigation} /> : <Messages navigation={navigation} />}
        </Box>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  tabsBox: {
    backgroundColor: OrangeShades.quaternaryOrange,
    marginHorizontal: '4%',
    marginTop: 18,
    borderRadius: '10px',
    borderColor: OrangeShades.primaryOrange,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
  activeTab: {
    backgroundColor: OrangeShades.primaryOrange,
    color: OrangeShades.quaternaryOrange,
    flexGrow: true,
    borderRadius: '9px',
  },
  inactiveTab: {
    backgroundColor: OrangeShades.quaternaryOrange,
    color: OrangeShades.primaryOrange,
    flexGrow: true,
    borderRadius: '9px',
  },
});

export default Notifications;
