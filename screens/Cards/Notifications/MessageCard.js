import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Heading, VStack, Text, HStack, Image, CircleIcon, Pressable } from 'native-base';
import dayjs from 'dayjs';

import { ChatContext } from '../../../contexts/ChatContext';
import { OrangeShades, BlackShades, BlueShades, SuccessColor } from '../../../assets/style/color';

const MessageCard = ({ data, navigation }) => {
  const {
    date,
    userInfo: { displayName, photoURL, lastMessage },
  } = data;

  const { dispatch } = useContext(ChatContext);

  const getFormattedDate = date => {
    const diff = dayjs(date.toDate()).diff(new Date(), 'hour');

    if (Math.abs(diff) > 24) {
      return dayjs(date.toDate()).format('MMM DD');
    }

    return dayjs(date.toDate()).format('H:m');
  };

  const handleGoToChat = () => {
    dispatch({ type: 'CHANGE_USER', payload: data });
    navigation.navigate('Chat');
  };

  return (
    <Pressable onPress={handleGoToChat} mx={1}>
      <HStack paddingY={3}>
        <Image style={styles.photoUrl} source={{ uri: photoURL }} alt={displayName} />
        <VStack flexGrow={true}>
          <Heading style={styles.name}>{displayName}</Heading>
          <Text style={styles.lastMessage}>{lastMessage ? lastMessage : 'Tap to chat'}</Text>
        </VStack>
        <VStack alignItems='flex-end' justifyContent='center' w='75'>
          <Text>{getFormattedDate(date)}</Text>
          <CircleIcon size='2.5' style={styles.read} />
        </VStack>
      </HStack>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  name: {
    color: BlueShades.secondaryBlue,
    fontSize: 19,
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
    marginTop: 10,
  },
  unread: {
    color: BlackShades.quaternaryBlack,
    marginTop: 10,
  },
});

export default MessageCard;
