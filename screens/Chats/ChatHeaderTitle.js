import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { HStack, VStack, Text, Image } from 'native-base';
import { BlueShades, OrangeShades } from '../../assets/style/color';

import { ChatContext } from '../../contexts/ChatContext';

const ChatHeaderTitle = () => {
  const {
    data: { user },
  } = useContext(ChatContext);

  return (
    <HStack>
      <Image style={styles.photoUrl} source={{ uri: user.photoURL }} alt={user.displayName} />

      <VStack flexGrow={true}>
        <Text style={styles.name}>{user.displayName}</Text>
        <Text style={styles.online}>Online Now</Text>
      </VStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  name: {
    color: BlueShades.secondaryBlue,
    fontSize: 16,
  },
  online: {
    color: OrangeShades.primaryOrange,
    marginTop: -2,
  },
  photoUrl: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    color: OrangeShades.primaryOrange,
    marginRight: 10,
  },
});

export default ChatHeaderTitle;
