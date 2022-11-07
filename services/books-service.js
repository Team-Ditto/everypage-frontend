import axiosRequest from './api';
import { async } from '@firebase/util';

// see users-service.js for example

export const addBook = async book => {
  try {
    // console.log('addBook', book);
    let addedBook = await axiosRequest.post('books', book);
    console.log('RESPONSE From Server:- BOOK : ', addedBook.data); // eslint-disable-line no-console
    return addedBook;
  } catch (error) {
    console.log('ERROR: ', error);
  }
};

export async function getUsersBook(genre = null, readingStatus = null) {
  try {
    let queryParams = '?page=1&perPage=5&sortBy=createdAt&sortOrder=asc';

    if (genre) {
      queryParams += `&genre=${genre}`;
    }

    if (readingStatus) {
      queryParams += `&readingStatus=${readingStatus}`;
    }
    return await axiosRequest.get(`books/users${queryParams}`);
  } catch (err) {
    console.log(err);
  }
}

export async function getBooksByUserId(userId) {
  try {
    const user = axiosRequest.get(`books/users/${userId}`);
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getMyBooksShelfLocation() {
  try {
    const locations = await axiosRequest.get('books/mine/locations');
    return locations;
  } catch (error) {
    console.log(error);
  }
}
