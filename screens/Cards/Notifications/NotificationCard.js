import React from 'react';
import { StyleSheet } from 'react-native';
import { Heading, VStack, Text } from 'native-base';
import { OrangeShades, BlackShades, BlueShades } from '../../../assets/style/color';

const NotificationCard = ({ data, navigation }) => {
  const { title, content, date } = data;

  return (
    <VStack>
      <Heading style={styles.heading}>{title}</Heading>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.date}>{date}</Text>
    </VStack>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: BlueShades.secondaryBlue,
  },
  content: {
    color: BlackShades.secondaryBlack,
  },
  date: {
    color: OrangeShades.primaryOrange,
  },
});

export default NotificationCard;
