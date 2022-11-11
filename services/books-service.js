import axiosRequest from './api';

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

export async function getUsersBook(
  queryParam,
  genre = null,
  readingStatus = null,
  location = null,
  isFromDiscover = false,
) {
  console.log(isFromDiscover);
  try {
    let queryParams = queryParam;

    if (genre) {
      queryParams += `&genre=${genre}`;
    }

    if (readingStatus) {
      queryParams += `&readingStatus=${readingStatus}`;
    }
    if (location) {
      queryParams += `&location=${location}`;
    }

    let url = '';
    if (isFromDiscover) {
      url = 'books/users';
    } else {
      url = 'books/mine';
    }

    return await axiosRequest.get(`${url}${queryParams}`);
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

export async function getBooksByKeyword(keyword) {
  try {
    const books = axiosRequest.get(`/books/all?${keyword}`);
    return books;
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
