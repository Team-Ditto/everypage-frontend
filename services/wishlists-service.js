import axiosRequest from './api';
import { async } from '@firebase/util';

export async function getWishlistsByStatus(status) {
  try {
    return await axiosRequest.get(`wishlists?status=${status}`);
  } catch (err) {
    console.log(err);
  }
}

export const createNewWishlist = async wishlistObj => {
  try {
    console.log(axiosRequest);
    const response = await axiosRequest.post('wishlists', wishlistObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export async function deleteWishlistByBookId(bookId) {
  try {
    console.log(axiosRequest);
    const response = await axiosRequest.delete(`wishlists/book/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
