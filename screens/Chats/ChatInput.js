import { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, View } from 'native-base';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import { AuthContext } from '../../contexts/AuthContext';
import { ChatContext } from '../../contexts/ChatContext';
import { BlueShades } from '../../assets/style/color';

const ChatInput = () => {
  const [text, setText] = useState('');

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    await updateDoc(doc(db, 'chats', data.chatId), {
      messages: arrayUnion({
        _id: Timestamp.now(),
        text,
        senderId: currentUser._id,
        date: Timestamp.now(),
      }),
    });

    // await updateDoc(doc(db, 'userChats', currentUser._id), {
    //   chatRefs: arrayUnion({
    //     _id: Timestamp.now(),
    //     text,
    //     senderId: currentUser._id,
    //     date: Timestamp.now(),
    //   }),
    //   [data.chatId + '.lastMessage']: {
    //     text,
    //   },
    //   [data.chatId + '.date']: serverTimestamp(),
    // });

    // await updateDoc(doc(db, 'userChats', data.user._id), {
    //   [data.chatId + '.lastMessage']: {
    //     text,
    //   },
    //   [data.chatId + '.date']: serverTimestamp(),
    // });

    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.input}>
        <Input
          borderWidth={0}
          placeholder='Type something...'
          onChangeText={newText => setText(newText)}
          value={text}
        />
      </View>
      <View style={styles.send}>
        <Button style={styles.button} onPress={handleSend}>
          Send
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: BlueShades.secondaryBlue,
    borderRadius: 10,
    borderStyle: 'solid',
    outline: 'none',
    paddingVertical: 5,
    fontSize: 18,
    flex: 5,
    height: 45,
  },
  send: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 5,
    height: 45,
    alignSelf: 'center',
    color: 'white',
    backgroundColor: BlueShades.primaryBlue,
  },
});

export default ChatInput;
