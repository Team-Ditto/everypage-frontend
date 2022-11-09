import React from 'react';
import { StyleSheet } from 'react-native';
import { VStack, Text, Pressable } from 'native-base';
import { OrangeShades, BlackShades, BlueShades } from '../../../assets/style/color';
import { markNotificationRead } from '../../../firebase/firebase-service';

const NotificationCard = ({ notification, navigation }) => {
  const { _id, title, description, created, chatRedirect, book, status } = notification;

  const handleCardPress = async () => {
    await markNotificationRead(_id);

    if (!chatRedirect) {
      // PLEASE UNCOMMENT THE BELOW LINE AFTER THE GETBOOKSBYID IS IMPLEMENTED FOR SINGLE BOOKS
      
      // navigation.navigate('SingleView', {
      //   bookData: book,
      // });
    } else {
      // TODO redirect to chat
    }
  };

  const getFormattedDate = date => date.toDate().toISOString().substring(0, 10).replaceAll('-', '/');

  return (
    <VStack>
      <Pressable onPress={handleCardPress} mx={1}>
        <Text style={[styles.heading, status === 'unread' ? styles.headingBold : '']}>{title}</Text>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.date}>{getFormattedDate(created)}</Text>
      </Pressable>
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    color: BlueShades.secondaryBlue,
    marginTop: 10,
  },
  headingBold: {
    fontWeight: '700',
  },
  content: {
    color: BlackShades.secondaryBlack,
    fontSize: 18,
    marginVertical: 10,
  },
  date: {
    color: OrangeShades.primaryOrange,
    marginBottom: 5,
  },
});

export default NotificationCard;
