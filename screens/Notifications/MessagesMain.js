import { useContext } from 'react';
import { Divider, VStack, View, ScrollView } from 'native-base';

import { ChatContext } from '../../contexts/ChatContext';
import MessageCard from '../Cards/Notifications/MessageCard';

const MessagesMain = ({ navigation }) => {
  const { data } = useContext(ChatContext);

  return (
    <VStack>
      <ScrollView h='100%'>
        {data.userChats?.map((data, id) => {
          return (
            <View key={id}>
              <MessageCard data={data} navigation={navigation} />
              <Divider />
            </View>
          );
        })}
      </ScrollView>
    </VStack>
  );
};

export default MessagesMain;
