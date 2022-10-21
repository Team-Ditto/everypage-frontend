import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth } from '../firebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        console.log('********** Currently Logged In User ***********');
        console.log(user);
        setUserToken(user);
      } else {
        setCurrentUser(null);
        setUserToken(null);
      }
    });

    const setUserToken = async user => {
      let token = '';

      if (user) {
        token = await user.getIdToken(true);
      }

      await AsyncStorage.setItem('user_token', token);
    };

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};