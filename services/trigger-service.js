import axiosRequest from './api';

export const triggerNotificationForAction = async triggerObj => {
  try {
    const response = await axiosRequest.post(`trigger`, triggerObj);
    return response;
  } catch (error) {
    console.log(error);
  }
};
