import React from 'react';
import { StyleSheet } from 'react-native';
import { Heading, VStack, Text, Pressable } from 'native-base';
import { OrangeShades, BlackShades, BlueShades } from '../../../assets/style/color';

const NotificationCard = ({ notification, navigation }) => {
  const { title, description, created, chatRedirect, book } = notification;

  const handleCardPress = () => {
    if (!chatRedirect) {
      navigation.navigate('SingleView', {
        bookData: book,
      });
    } else {
      // TODO redirect to chat
    }
  };

  const getFormattedDate = date => date.toDate().toISOString().substring(0, 10).replaceAll('-', '/');

  return (
    <VStack>
      <Pressable onPress={handleCardPress} mx={1}>
        <Heading style={styles.heading}>{title}</Heading>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.date}>{getFormattedDate(created)}</Text>
      </Pressable>
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: BlueShades.secondaryBlue,
    marginTop: 5,
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
