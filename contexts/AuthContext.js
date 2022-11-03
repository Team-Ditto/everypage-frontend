import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { auth } from '../firebase';
import { getMyUserProfile } from '../services/users-service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserToken(user);
      } else {
        setCurrentUser(null);
        setUserToken(null);
      }
    });

    const setUserToken = async user => {
      if (user) {
        const token = await user.getIdToken(true);
        await AsyncStorage.setItem('access_token', token);
        await getMyProfile();
      } else {
        await AsyncStorage.setItem('access_token', '');
      }
    };

    async function getMyProfile() {
      const user = await getMyUserProfile();
      setCurrentUser({ ...user.data });
    }

    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
