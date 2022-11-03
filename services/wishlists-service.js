import axiosRequest from './api';

export async function getWishlistsByStatus(status) {
  try {
    return await axiosRequest.get(`wishlists?status=${status}`);
  } catch (err) {
    console.log(err);
  }
}

// see users-service.js for example
