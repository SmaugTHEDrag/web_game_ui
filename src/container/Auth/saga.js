// import { getExampleApi } from "@/api/example";
import { takeLatest, put, call } from "redux-saga/effects";
import { AUTH } from "./constants";
import { loginSuccess } from "./actions";
import { loginApi } from "../../api/Auth";
import { setToken } from "../../page/utils/cookies";

function* handlerLogin(props) {
  try {
    const { username, password } = props;
    const res = yield call(loginApi, { username, password });
    setToken(res.data?.token)
    
    yield put(loginSuccess({ username: username }));
  } catch (err) {
    console.log("err handlerLogin", err);
  }
}

function* root() {
  yield takeLatest(AUTH.AUTH_LOGIN, handlerLogin);
}

export default root;
