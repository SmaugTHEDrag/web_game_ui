import { LOADING } from "./constants";

const initialState = {
  isLoading: false,
};

export default function app(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case LOADING.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
