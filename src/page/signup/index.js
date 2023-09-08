import * as React from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../container/store";
import { signUpApi } from "../../api/Auth";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';
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

const SignUp = () => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  const [authData, setAuthData] = React.useState({
    username: {
      value: "",
      isError: false,
      errMessage: "Tên đăng nhập cần ít nhất 1 ký tự",
    },
    password: {
      value: "",
      isError: false,
      errMessage: "Mật khẩu cần ít nhất 1 ký tự",
    },
    email: {
        value: "",
        isError: false,
        errMessage: "Họ tên cần ít nhất 1 ký tự",
    }
  });

  React.useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    const email = data.get("email");

    if (username !== "" && password !== "" && email !== "") {
        try{
            const response = await signUpApi({email, username,password})
            if(response.result === "ok"){
                alert("Success!")
                setAuthData({
                    username: {
                      value: "",
                      isError: false,
                      errMessage: "Tên đăng nhập cần ít nhất 1 ký tự",
                    },
                    password: {
                      value: "",
                      isError: false,
                      errMessage: "Mật khẩu cần ít nhất 1 ký tự",
                    },
                    email: {
                        value: "",
                        isError: false,
                        errMessage: "Họ tên cần ít nhất 1 ký tự",
                    }
                  })
                return;
            }
        }catch(error){
            if(error.response.data){
                alert(error.response.data.error)
                console.log(error)
                return;
            }
        }
    }
  };

  const onChangeInputHandler = (event) => {
    const { name, value } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        value: value,
      },
    };
    setAuthData(newAuthData);
  };

  const checkAuthDataValid = (event) => {
    const { name, value } = event.target;
    if (value === "") {
      const newAuthData = {
        ...authData,
        [name]: {
          ...authData[name],
          isError: true,
        },
      };
      setAuthData(newAuthData);
    }
  };

  const onFocusHandler = (event) => {
    const { name } = event.target;
    const newAuthData = {
      ...authData,
      [name]: {
        ...authData[name],
        isError: false,
      },
    };
    setAuthData(newAuthData);
  };

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
          <label htmlFor="email">
            <b id="password">Email</b>
          </label>
          <input
            type="text"
            placeholder="Nhập email"
            name="email"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.email.errMessage)
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
          <button type="submit">SIGNUP</button>
          <Link to ='/sign-in' id="form-move">Already have account or move back?</Link>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
