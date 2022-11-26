import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View, HStack, ScrollView } from 'native-base';
import { doc, onSnapshot } from 'firebase/firestore';

import { ChatContext } from '../../contexts/ChatContext';
import { db } from '../../firebase';
import Message from './Message';
import { BlueShades, OrangeShades } from '../../assets/style/color';

const Messages = () => {
  const [banner, setBanner] = useState(null);
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'chats', data.chatId), doc => {
      if (doc.exists()) {
        setBanner(doc.data().banner);
        setMessages(doc.data().messages);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  return (
    <View style={styles.messages}>
      <HStack justifyContent={'center'} alignItems={'center'} marginY={3}>
        <Image style={styles.photoUrl} source={{ uri: data.user.photoURL }} alt={data.user.displayName} />
        <Text style={styles.banner}>{banner}</Text>
      </HStack>
      <ScrollView>
        {/* insert the book card here. See if we can make use of existing card components, if not do not 
        create a new component and just do the markup here. For data refer to firebase/chats collection */}
        {messages.map(m => (
          <Message message={m} key={m._id} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  messages: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 20,
  },
  banner: { color: BlueShades.secondaryBlue, fontSize: 16, fontWeight: '500' },
  photoUrl: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    color: OrangeShades.primaryOrange,
    marginRight: 10,
  },
});

export default Messages;
