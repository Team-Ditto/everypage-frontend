import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC9zLIwJ6MCpFLcHtdHLRGi7xUd0oRR4Q4',
  authDomain: 'everypage-db910.firebaseapp.com',
  projectId: 'everypage-db910',
  storageBucket: 'everypage-db910.appspot.com',
  messagingSenderId: '983738906485',
  appId: '1:983738906485:web:0d17c4cc4237e1e1a1453c',
  databaseURL: 'https://everypage-db910.firebaseio.com',
  measurementId: 'G-HNZB65K5QL',
};

let app;
let auth;

// Initialize Firebase
// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
}

auth = getAuth();
const storage = getStorage();
const db = getFirestore();

export { auth, storage, db };
