import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Image, Text, View, HStack, ScrollView, Box } from 'native-base';
import { doc, onSnapshot } from 'firebase/firestore';

import { ChatContext } from '../../contexts/ChatContext';
import { db } from '../../firebase';
import Message from './Message';
import { BlueShades, OrangeShades, SuccessColor, InUseColor, OnHoldColor } from '../../assets/style/color';

const Messages = () => {
  const [banner, setBanner] = useState(null);
  const [latestBook, setLatestBook] = useState();
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'chats', data.chatId), doc => {
      if (doc.exists()) {
        setBanner(doc.data().banner);
        setLatestBook(doc.data().book);
        setMessages(doc.data().messages);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  const statusStyle = [
    {
      status: 'Available',
      backgroundColor: SuccessColor.successBG,
      textColor: SuccessColor.successText,
    },
    {
      status: 'In-Use',
      backgroundColor: InUseColor.inUseBG,
      textColor: InUseColor.inUseText,
    },
    {
      status: 'On-Hold',
      backgroundColor: OnHoldColor.onHoldBG,
      textColor: OnHoldColor.onHoldText,
    },
  ];

  getStyling = () => {
    switch (latestBook.borrowingStatus) {
      case 'Available':
        return statusStyle[0];

      case 'In-Use':
        return statusStyle[1];

      case 'On-Hold':
        return statusStyle[2];

      default:
      // console.log('Book status not available');
    }
  };

  return (
    <View style={styles.messages}>
      <HStack justifyContent={'center'} alignItems={'center'} marginY={3}>
        <Image style={styles.photoUrl} source={{ uri: data.user.photoURL }} alt={data.user.displayName} />
        <Text style={styles.banner}>{banner}</Text>
      </HStack>
      <ScrollView>
        {!!latestBook && (
          <Box>
            <HStack display='flex' flex='1' style={styles.book}>
              <Box style={{ display: 'flex', flex: 1 }}>
                <Image
                  style={{ position: 'absolute', left: 0, width: '100%', height: '100%' }}
                  borderRadius='10px'
                  source={{
                    uri: latestBook.images[0],
                  }}
                  alt={latestBook.title}
                />
              </Box>
              <Box w='55%' ml='3%' display='flex'>
                <Text flex='1' fontWeight='semibold' fontSize='md' numberOfLines={2}>
                  {latestBook.title}
                </Text>
                <Text fontSize='md' numberOfLines={2}>
                  {latestBook.author}
                </Text>
                <Box
                  bgColor={getStyling().backgroundColor}
                  borderRadius='4px'
                  borderColor={getStyling().textColor}
                  borderStyle='solid'
                  borderWidth='1px'
                  p='4px'
                  marginY='10px'
                  marginRight='auto'
                >
                  <Text color={getStyling().textColor}>{latestBook.borrowingStatus}</Text>
                </Box>
                <Text>Owned by</Text>
                <Text fontSize='md' underline color={OrangeShades.primaryOrange}>
                  {latestBook.ownerName}
                </Text>
              </Box>
            </HStack>
          </Box>
        )}
        {messages.map(m => (
          <Message message={m} key={m._id} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    backgroundColor: BlueShades.tertiaryBlue,
    padding: 20,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
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
