import axiosRequest from './api';

export async function requestToBorrow(requestObject) {
  try {
    let requestToBorrow = await axiosRequest.post('trigger', requestObject);
    return 'Book requested';
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

export async function requestCancelHold(requestObject) {
  try {
    let requestToBorrow = await axiosRequest.post('trigger', requestObject);
    return 'Hold canceled';
  } catch (error) {
    console.log('ERROR: ', error);
  }
}
