import axiosRequest from './api';

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

// see users-service.js for example
