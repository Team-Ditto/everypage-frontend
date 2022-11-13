import { useContext, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'native-base';
import dayjs from 'dayjs';

import { AuthContext } from '../../contexts/AuthContext';
import { ChatContext } from '../../contexts/ChatContext';
import { BlackShades, BlueShades } from '../../assets/style/color';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    // ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const getFormattedDate = date => {
    const diff = dayjs(date.toDate()).diff(new Date(), 'hour');

    if (Math.abs(diff) > 24) {
      return dayjs(date.toDate()).format('MMM DD') + ' at ' + dayjs(date.toDate()).format('H:m');
    }

    return dayjs(date.toDate()).format('H:m');
  };

  const isCurrentUser = message.senderId === currentUser._id;

  return (
    <View ref={ref} style={[styles.message, isCurrentUser && styles.owner]}>
      <View style={styles.messageInfo}>
        <Image
          style={styles.image}
          source={{
            uri: isCurrentUser ? currentUser.photoURL : data.user.photoURL,
          }}
          alt={isCurrentUser ? currentUser.displayName : data.user.displayName}
        />
      </View>
      <View style={styles.messageContent}>
        <Text style={styles.content}>{message.text}</Text>
        <Text style={styles.date}>{getFormattedDate(message.date)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  owner: {
    flexDirection: 'row-reverse',
  },
  messageInfo: {
    flexDirection: 'column',
    color: 'gray',
    fontWeight: 300,
  },
  messageContent: {
    maxWidth: '100%',
    flexDirection: 'column',
    marginHorizontal: 8,
  },
  image: {
    width: 40,
    height: 40,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    objectFit: 'cover',
  },
  content: {
    backgroundColor: BlueShades.tertiaryBlue,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
    maxWidth: 240,
    minWidth: 100
  },
  date: {
    color: BlackShades.tertiaryBlack,
    fontSize: 10,
    marginLeft: 10,
  },
});

export default Message;
