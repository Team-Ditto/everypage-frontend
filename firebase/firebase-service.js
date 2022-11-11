import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth, db, storage } from './';
import { createNewUser, getBookAsPerUser } from '../services/users-service';
import { DEFAULT_PROFILE_PHOTO_URL, USER_PROFILE_UPLOAD_DIRECTORY } from '../constants';

/**
 * creates new user with the credentials
 * @param {String} email the email
 * @param {String} password the password
 * @param {String} displayName the the display name
 * @param {File} file the profile photo file
 * @returns void
 */
export const signUpWithEmailAndPassword = async (email, password, displayName, file = null) => {
  try {
    let photoURL;
    const response = await createUserWithEmailAndPassword(auth, email, password);

    // @TODO: Can we export it to common place. Resuable code
    if (file) {
      photoURL = await uploadFile(file, USER_PROFILE_UPLOAD_DIRECTORY, displayName);
    } else {
      photoURL = DEFAULT_PROFILE_PHOTO_URL;
    }

    // create user on MongoDB
    await createNewUser({
      _id: response.user.uid,
      displayName,
      email,
      photoURL,
    });

    await updateProfile(response.user, {
      displayName,
      photoURL,
    });

    //   create empty user chats on firestore (this will be used later for chats)
    await setDoc(doc(db, 'userChats', response.user.uid), {});
  } catch (err) {
    console.log(err);
    throw err;
  }
};

/**
 * creates new user with the credentials
 * @param {String} email the email
 * @param {String} password the password
 * @returns void
 */
export const loginWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

/**
 * logs out the firebase user
 * @returns void
 */
export const logout = async () => {
  try {
    await signOut(auth);
    await AsyncStorage.setItem('access_token', '');
  } catch (error) {
    console.log(err);
    throw err;
  }
};

/**
 * uploads the file to the firebase storage and returns the public url to access it
 * @param {File} file the file
 * @param {String} folder the folder to be uploaded
 * @param {String} fileName the name of the file
 * @returns the public url for the uploaded file
 */
export const uploadFile = async (file, folder, fileName) => {
  try {
    const date = new Date().getTime();
    const storageRef = ref(storage, `${folder}/${fileName}-${date}`);

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', file.uri, true);
      xhr.send(null);
    });

    await uploadBytes(storageRef, blob);
    const publicURL = await getDownloadURL(storageRef);
    blob.close();

    return publicURL;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getBooksOfLoginUser = async () => {
  return await getBookAsPerUser();
};

/**
 * marks the notification read
 * @param {string} notificationId the notification ID
 */
export const markNotificationRead = async notificationId => {
  await updateDoc(doc(db, 'notifications', notificationId), {
    status: 'read',
  });
};
