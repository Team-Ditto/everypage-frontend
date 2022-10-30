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

/**
 * gets the current logged in user/myself from MONGODB
 */
export const getMyUserProfile = async () => {
  try {
    const user = axiosRequest.get('users/me');
    return user;
  } catch (error) {
    console.log(error);
  }
};
