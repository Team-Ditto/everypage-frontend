import { useState } from 'react';
import { Divider, VStack } from 'native-base';
import MessageCard from '../Cards/Notifications/MessageCard';
import { MessageData } from '../../constants/MessageData';

const Messages = ({ navigation }) => {
  const [messages, setMessages] = useState(MessageData);

  return (
    <VStack>
      {messages?.map((data, id) => {
        return (
          <View key={id}>
            <MessageCard data={data} navigation={navigation} />
            <Divider />
          </View>
        );
      })}
    </VStack>
  );
};

export default Messages;
