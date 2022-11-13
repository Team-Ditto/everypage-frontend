import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth, db, storage } from './';
import { createNewUser, getBookAsPerUser } from '../services/users-service';
import { BOOKS_UPLOAD_DIRECTORY, DEFAULT_PROFILE_PHOTO_URL } from '../constants';

/**
 * creates new user with the credentials
 * @param {String} email the email
 * @param {String} password the password
 * @param {String} displayName the the display name
 * @param {File} file the profile photo file
 * @returns void
 */
export const signUpWithEmailAndPassword = async (email, password, displayName) => {
  try {
    let photoURL;
    const response = await createUserWithEmailAndPassword(auth, email, password);

    // create user on MongoDB
    await createNewUser({
      _id: response.user.uid,
      displayName,
      email,
      photoURL: DEFAULT_PROFILE_PHOTO_URL,
    });

    await updateProfile(response.user, {
      displayName,
      photoURL,
    });

    // create empty user chats on firestore (this will be used later for chats)
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
 *
 * @param {Array} bookUri the array of local book URLs
 * @param {String} bookName the book title
 * @returns array of public URLs for the book
 */
export const uploadBookPictures = async (bookUri, bookName) => {
  const bookPromises = [];

  bookUri.forEach((url, index) => {
    bookPromises.push(uploadFile(url, BOOKS_UPLOAD_DIRECTORY, `${bookName}_${index + 1}`));
  });

  const response = await Promise.all(bookPromises);

  return response;
};

/**
 * uploads the file to the firebase storage and returns the public url to access it
 * @param {File} fileUri the local file uri
 * @param {String} folder the folder to be uploaded
 * @param {String} fileName the name of the file
 * @returns the public url for the uploaded file
 */
export const uploadFile = async (fileUri, folder, fileName) => {
  try {
    const storageRef = ref(storage, `${folder}/${fileName}`);

    const img = await fetch(fileUri);
    const blob = await img.blob();

    await uploadBytes(storageRef, blob);
    const publicURL = await getDownloadURL(storageRef);

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
