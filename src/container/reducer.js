import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import bookReducer from "./Book/reducer";
import loadingReducer from "./Loading/reducer";

const reducer = () =>
  combineReducers({
    authReducer,
    bookReducer,
    loadingReducer,
  });

export default reducer;
