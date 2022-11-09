import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { VStack } from 'native-base';
import { collection, query, onSnapshot, where } from 'firebase/firestore';

import { db } from '../firebase';
import { AuthContext } from '../contexts/AuthContext';
import { NotificationContext } from '../contexts/NotificationContext';

import Home from './Main/Index';

const IndexScreen = ({ navigation }) => {
  const { currentUser } = useContext(AuthContext);
  const { setNotifications } = useContext(NotificationContext);

  useEffect(() => {
    //over here right now I am doing as per wireframes
    // but when we get user from backend we will have
    // user name setup  for the user.
    //=============================
    navigation.setOptions({
      title: ` ${currentUser.displayName}'s Library`,
      //  value === "" ? "No title" : value,
    });
    // =============================
  }, [navigation]);

  // notifications observer
  useEffect(() => {
    const getNotifications = () => {
      try {
        const q = query(collection(db, 'notifications'), where('owner', '==', currentUser._id));

        const unsubscribe = onSnapshot(q, doc => {
          const notifications = [];

          doc.forEach(doc => {
            const singleNotification = {
              ...doc.data(),
              _id: doc.id,
            };

            notifications.push(singleNotification);
          });

          setNotifications(notifications);
        });

        return () => {
          console.log('Unsubscribe from notifications listener');
          unsubscribe();
        };
      } catch (error) {
        console.log(error);
      }
    };

    currentUser._id && getNotifications();
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
