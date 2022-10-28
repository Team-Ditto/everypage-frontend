import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
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

// Initialize Firebase
// Editing this file with fast refresh will reinitialize the app on every refresh, let's not do that
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
