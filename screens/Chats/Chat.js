import { useContext, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { ChatContext } from '../../contexts/ChatContext';
import Messages from './Messages';
import ChatInput from './ChatInput';

const Chat = ({ navigation }) => {
  const { data } = useContext(ChatContext);

  useEffect(() => {
    if (!data.chatId || !data.user) {
      navigation.navigate('Notifications');
    }
  }, []);

  return (
    <SafeAreaView style={styles.chat}>
      <View style={styles.messageContainer}>
        <Messages />
      </View>
      <View style={styles.chatInput}>
        <ChatInput />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    flexDirection: 'column',
  },
  messageContainer: {
    flex: 9,
  },
  chatInput: {
    flex: 1,
  },
});

export default Chat;
