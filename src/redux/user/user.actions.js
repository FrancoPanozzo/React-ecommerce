import { actionTypes } from './user.types';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});
