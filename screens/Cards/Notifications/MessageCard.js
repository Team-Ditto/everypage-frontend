import React from 'react';
import { StyleSheet } from 'react-native';
import { Heading, VStack, Text, HStack, Image, CircleIcon } from 'native-base';
import { OrangeShades, BlackShades, BlueShades, SuccessColor } from '../../../assets/style/color';

const MessageCard = ({ data, navigation }) => {
  const { name, photoUrl, lastMessage, date, readStatus } = data;

  return (
    <HStack>
      <Image style={styles.photoUrl} source={{ uri: photoUrl }} alt={name} />
      <VStack flexGrow={true}>
        <Heading style={styles.name}>{name}</Heading>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </VStack>
      <VStack alignItems='flex-end' justifyContent='center' w='50'>
        <Text>{date}</Text>
        <CircleIcon size='3' style={readStatus ? styles.read : styles.unread} />
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  name: {
    color: BlueShades.secondaryBlue,
  },
  lastMessage: {
    color: BlackShades.secondaryBlack,
  },
  photoUrl: {
    borderRadius: '50%',
    width: 48,
    height: 48,
    color: OrangeShades.primaryOrange,
    marginRight: 10,
  },
  read: {
    color: SuccessColor.success,
  },
  unread: {
    color: BlackShades.quaternaryBlack,
  },
});

export default MessageCard;
