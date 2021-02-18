import {types} from '../Types';

const initialState = {
  userActive: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.userLoggedin:
      return {
        ...state,
        userActive: action.payload,
      };
    default:
      return state;
  }
};
