import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Pressable } from 'native-base';

import { AuthContext } from '../../../contexts/AuthContext';
import { OrangeShades, BlackShades, BlueShades } from '../../../assets/style/color';
import { markNotificationRead } from '../../../firebase/firebase-service';

const NotificationCard = ({ notification, navigation, handleInput }) => {
  const { currentUser } = useContext(AuthContext);
  const { _id, title, description, created, chatRedirect, initiator, book, status } = notification;

  const handleCardPress = async () => {
    await markNotificationRead(_id);

    if (!chatRedirect) {
      // console.log('Notification', notification);

      if (notification.bookOwner === currentUser._id) {
        navigation.navigate('SingleBook', {
          bookId: book,
          isfromNotification: true,
          requestorId: initiator,
        });
      } else {
        navigation.navigate('SingleView', {
          bookId: book,
          isfromNotification: true,
          requestorId: initiator,
        });
      }
    } else {
      handleInput(false);
    }
  };

  const getFormattedDate = date => date.toDate().toISOString().substring(0, 10).replaceAll('-', '/');

  return (
    <VStack>
      <Pressable onPress={handleCardPress} mx={1}>
        <Text bold={status === 'unread'} style={[styles.heading]}>
          {title}
        </Text>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.date}>{getFormattedDate(created)}</Text>
      </Pressable>
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: BlueShades.secondaryBlue,
    marginTop: 8,
  },
  headingBold: {
    fontWeight: 'bold',
  },
  content: {
    color: BlackShades.secondaryBlack,
    fontSize: 14,
    marginVertical: 10,
  },
  date: {
    color: OrangeShades.primaryOrange,
    marginBottom: 5,
  },
});

export default NotificationCard;
