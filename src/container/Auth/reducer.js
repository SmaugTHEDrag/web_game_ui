import { AUTH } from "./constants";

const initialState = {
  data: {},
  isAuth: false,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case AUTH.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.data,
        isAuth: true,
      };
    case AUTH.AUTH_LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    case AUTH.AUTH_DATA:
      return {
        ...state,
        data: action.data,
        isAuth: true,
      };
    default:
      return state;
  }
}
