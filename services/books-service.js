import axiosRequest from './api';

// see users-service.js for example

export async function getAllBooks() {
  try {
    return await axiosRequest.get(`books/all`);
  } catch (err) {
    console.log(err);
  }
}
