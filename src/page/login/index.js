import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { login } from "../../container/Auth/actions";
import { useAppSelector } from "../../container/store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie"

const Container = styled("div")`
  input[type="text"],
  input[type="password"] {
    color:black;
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    
  }

  button {
    background-color: aqua;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    color:black;
    opacity: 0.8;
  }

  .cancelbtn {
    color:black;
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }

  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    
    color:black;
    padding: 16px;
  }

  span.psw {
    color:black;
    float: right;
    padding-top: 16px;
  }

  .modal {
    color:black;
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color:blue;
    background: aqua,
    padding-top: 60px;
  }

  .modal-content {
    color:black;
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
  label{
    color:black;
  }
  #username{
    color:black;
  }
  #password{
    color:black;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  const [authData, _] = useState({
    username: {
      value: "",
      isError: false,
      errMessage: "Enter username",
    },
    password: {
      value: "",
      isError: false,
      errMessage: "Password must be at least 6 characters",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    if (username !== "" && password !== "") {
      Cookies.set('username', username);
      console.log('login')
      dispatch(
        login({
          username: data.get("username"),
          password: data.get("password"),
        })
      );
    }
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/Home");
    }
  }, [isAuth, history]);

  return (
    <Container className="modal">
      <form
        className="modal-content animate"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <label htmlFor="username">
            <b id="username">Username</b>
          </label>
          <input
            type="text"
            placeholder="Nhập tên đăng nhập"
            name="username"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <label htmlFor="password">
            <b id="password">Password</b>
          </label>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.password.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <button type="submit">LOGIN</button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
