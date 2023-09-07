import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./page/login";
import BooksManagement from "./page/booksManagement";
import HomeWeb from "./page/HomeWeb/HomeWeb"
import FrontWeb from "./page/Frontweb/Frontweb";
import { useEffect, useState } from "react";
import { useAppSelector } from "./container/store";
import { useDispatch } from "react-redux";
import { setAuthData } from "./container/Auth/actions";
import Cookies from "js-cookie"
import Loading from "./components/modal/Loading";
import Text from "./page/Text/Text";
import ImageSearch from "./page/ImageSearch/ImageSearch";
function App() {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get("token");
    const username = Cookies.get("username");
    if (token && username) {
      dispatch(setAuthData({ username, token }))
    }
  }, []);
  return (
    <BrowserRouter>
        <Switch>
          <Layout>
          <Route path="/sign-in" component={Login} />
          <Route path="/Home" component={HomeWeb} />
          <PrivateRoute path="/Text" component={Text} isAuthenticated={isAuth}/>
          <PrivateRoute path="/ImageSearch" component={ImageSearch} isAuthenticated={isAuth}/>
          <PrivateRoute
            path="/books-management"
            component={BooksManagement}
            isAuthenticated={isAuth}
          />
          <Route path="/" component={FrontWeb} exact />
          </Layout>
        </Switch>

      {isLoading && <Loading />}
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
