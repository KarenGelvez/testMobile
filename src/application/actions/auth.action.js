import {types} from '../Types';

export const userLoggedin = (state) => {
  return {
    type: types.userLoggedin,
    payload: state,
  };
};
