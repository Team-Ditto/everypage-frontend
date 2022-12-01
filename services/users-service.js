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

export const getUserById = async id => {
  try {
    // console.log('userId', id);
    const res = await axiosRequest.get(`users/Me6dqCin5bUpXzdmNk6QIwAUhvk2`);
    // console.log('res', res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export async function getBookAsPerUser() {
  try {
    return await axiosRequest.get(`books/mine`);
  } catch (err) {
    console.log(err);
  }
}

/**
 * gets the current logged in user/myself from MONGODB
 */
export const getMyUserProfile = async () => {
  try {
    const user = axiosRequest.get('users/me');
    return user;
  } catch (error) {
    // console.log('is it coming from here');
    console.log(error);
  }
};

/**
 * gets the current logged in user/myself from MONGODB
 */
export const updateMyUserProfile = async data => {
  try {
    const user = axiosRequest.put('users/me', data);
    return user;
  } catch (error) {
    console.log(error);
  }
};
