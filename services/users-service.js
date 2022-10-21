import axiosRequest from './api';

/**
 * creates a new user in MONGODB
 * @param {Object} user the user
 */
export const createNewUser = async user => {
  try {
    await axiosRequest.post('users', user);
  } catch (error) {
    console.log(error);
  }
};
