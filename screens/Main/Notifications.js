import { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Box, HStack, Button, Text } from 'native-base';
import { OrangeShades } from '../../assets/style/color';
import Search from '../Assets/Search';
import NotificationsMain from '../Notifications/NotificationsMain';
import MessagesMain from '../Notifications/MessagesMain';
import Filter from '../Assets/FilterSettings/Filter';
import { NotificationContext } from '../../contexts/NotificationContext';
import { ChatContext } from '../../contexts/ChatContext';

const Notifications = ({ navigation }) => {
  //const [wishlistData, setWishlistData] = useState(WishlistData);
  const [isNotifications, setIsNotifications] = useState(true);
  const { totalUnreadNotifications } = useContext(NotificationContext);
  const { data } = useContext(ChatContext);

  function handleInput(value) {
    setIsNotifications(value);
  }
  const onSearchSubitted = async searchText => {
    const searchedBooks = await getBooksByKeyword(searchText);
    setBookStatus(`Results for "${searchText}"`);
    navigation.setOptions({
      title: `Search Results`,
    });
  };

  return (
    <VStack>
      {/* Do we really need search here. */}
      {/* <Box display='flex' width='100%' mt={2}> */}
      {/* <HStack display='flex' justifyContent='center' alignItems='center'> */}
      {/* <Search navigation={navigation} onSearchSubitted={onSearchSubitted} /> */}
      {/* </HStack> */}
      {/* </Box> */}
      <Box style={styles.tabsBox}>
        <HStack display='flex' flexDirection='row'>
          <Button
            style={isNotifications ? styles.activeTab : styles.inactiveTab}
            _text={isNotifications ? styles.activeTab : styles.inactiveTab}
            onPress={() => handleInput(true)}
          >
            Notifications
            <Text
              position='absolute'
              left='95'
              top='-1'
              fontSize='16'
              style={isNotifications ? styles.activeColor : styles.inactiveColor}
            >
              {totalUnreadNotifications}
            </Text>
          </Button>
          <Button
            style={isNotifications ? styles.inactiveTab : styles.activeTab}
            _text={isNotifications ? styles.inactiveTab : styles.activeTab}
            onPress={() => handleInput(false)}
          >
            Messages
            <Text
              position='absolute'
              right='-20'
              top='-1'
              fontSize='16'
              style={isNotifications ? styles.inactiveColor : styles.activeColor}
            >
              {data.userChats.length}
            </Text>
          </Button>
        </HStack>
      </Box>
      <VStack>
        <Box style={styles.main}>
          {isNotifications ? (
            <NotificationsMain navigation={navigation} handleInput={handleInput} />
          ) : (
            <MessagesMain navigation={navigation} />
          )}
        </Box>
      </VStack>
    </VStack>
  );
};

const styles = StyleSheet.create({
  /*   search: {
    display: 'flex',
    paddingTop: 10,
    alignSelf: 'center',
    justifySelf: 'center',
    backgroundColor: 'blue',
  }, */
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
    position: 'relative',
  },
  inactiveTab: {
    backgroundColor: OrangeShades.quaternaryOrange,
    color: OrangeShades.primaryOrange,
    flexGrow: true,
    borderRadius: '9px',
    position: 'relative',
  },
  main: {
    marginTop: 17,
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    width: '92%',
    height: '100%',
  },
  activeColor: {
    color: OrangeShades.quaternaryOrange,
  },
  inactiveColor: {
    color: OrangeShades.primaryOrange,
  },
});

export default Notifications;
