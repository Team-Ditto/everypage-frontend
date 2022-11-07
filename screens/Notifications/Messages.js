import React, { useState } from 'react';
import { Divider, VStack, Text } from 'native-base';
import MessageCard from '../Cards/Notifications/MessageCard';
import { MessageData } from '../../constants/MessageData';

const Messages = ({ navigation }) => {
  const [messages, setMessages] = useState(MessageData);

  return (
    <VStack>
      {messages?.map((data, id) => {
        return (
          <>
            <MessageCard key={id} data={data} navigation={navigation} />
            <Divider />
          </>
        );
      })}
    </VStack>
  );
};

export default Messages;
