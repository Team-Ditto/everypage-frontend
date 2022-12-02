import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { collection, query, onSnapshot, where, doc, serverTimestamp, updateDoc } from 'firebase/firestore';

import { db } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';

import Home from './Main/Index';
import { ChatContext } from '../contexts/ChatContext';

const IndexScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
  const { setNotifications, setTotalUnreadNotifications } = useContext(NotificationContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    navigation.setOptions({
      title: ` ${currentUser.displayName}'s Library`,
    });
  }, [navigation]);

  // notifications observer
  useEffect(() => {
    const getNotifications = () => {
      try {
        const q = query(collection(db, 'notifications'), where('owner', '==', currentUser._id));

        const unsubscribe = onSnapshot(q, doc => {
          const notifications = [];
          let totalUnreadNotifications = 0;

          doc.forEach(doc => {
            const singleNotification = {
              ...doc.data(),
              _id: doc.id,
            };

            singleNotification.status === 'unread' && ++totalUnreadNotifications;

            notifications.push(singleNotification);
          });

          setNotifications(
            notifications.sort((x, y) => {
              return ('' + y.status).localeCompare(x.status);
            }),
          );
          setTotalUnreadNotifications(totalUnreadNotifications);
        });

        return () => {
          // console.log('Unsubscribe from notifications listener');
          unsubscribe();
        };
      } catch (error) {
        console.log(error);
      }
    };

    currentUser._id && getNotifications();
  }, [currentUser._id]);

  // chats observer
  useEffect(() => {
    const getUserChats = () => {
      try {
        const unsubscribe = onSnapshot(doc(db, 'userChats', currentUser._id), doc => {
          dispatch({ type: 'SET_USER_CHATS', payload: doc.data() });
        });

        return () => {
          // console.log('Unsubscribe from chats listener');
          unsubscribe();
        };
      } catch (error) {
        console.log(error);
      }
    };

    currentUser._id && getUserChats();
  }, [currentUser._id]);

  return (
    <VStack style={Style.mainContainerStyle} bg='muted.50'>
      <Home style={{ flex: 1 }} navigation={navigation} />
    </VStack>
  );
};

const Style = StyleSheet.create({
  mainContainerStyle: {
    position: 'relative',
    flex: 1,
    height: '100%',
  },
});

export default IndexScreen;
